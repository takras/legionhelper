/* eslint-disable @next/next/no-img-element */
"use client";
import Script from "next/script";
import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { AVAILABLE_KEYWORDS, Keyword } from "@/types";
import { rules as rulesDocument } from "@/data/rules";
import { CatalogCard } from "./catalog-card";
import { KeywordCard } from "./keyword-card";
import { RelatedKeywords } from "./related-keyword";
import { RenderContent } from "./render-content";
import { About } from "./about";
import { sortKeyword } from "@/utils";
import styles from "./helper.module.css";
import classNames from "classnames";
import { Changelog } from "./changelog";

export default function Helper() {
  const modal = document.querySelector("[data-modal]") as HTMLDialogElement;

  const [selectedKeywords, setSelectedKeywords] = useState<Keyword[]>([]);
  const [filter, setFilter] = useState<string>("");

  const print_unused_keywords = () =>
    AVAILABLE_KEYWORDS.forEach((a_keyword) => {
      const found = rulesDocument.keywords.find(
        (keyword) => keyword.keyword === a_keyword
      );
      if (!found) {
        console.log(a_keyword);
      }
    });

  //print_unused_keywords();

  let counter = 0;

  useEffect(() => {
    if (!modal) {
      return;
    }
    if (selectedKeywords.length > 0) {
      modal.showModal();
      modal.scrollTop = 0;
    }
  }, [modal, selectedKeywords]);

  const getKey = (key: string) => {
    counter += 1;
    return `${key}_${counter}`;
  };

  const selectKeyword = (keyword: Keyword) => {
    if (keyword.keyword === "search_result_blank") {
      return null;
    }
    setSelectedKeywords((current) => current.concat(keyword));
  };

  const goToPreviousKeyword = (keyword: Keyword) => {
    setSelectedKeywords((current) => current.slice(0, -1));
  };

  const modalComponent = () => {
    const selectedKeyword = selectedKeywords.slice(-1).shift();
    const previousKeyword = selectedKeywords[selectedKeywords.length - 2];
    return (
      <dialog data-modal className={styles.modal}>
        <div className={styles.modalTopMenu}>
          <div className={styles.modalButtonRow}>
            {previousKeyword && (
              <button
                onClick={() => goToPreviousKeyword(previousKeyword)}
                className={styles.modalBackButton}
              >
                <img
                  src="/images/arrow-left.png"
                  alt="Arrow pointing left"
                  width="20"
                ></img>
                {previousKeyword.name}
              </button>
            )}
            {!previousKeyword && <div />}
            <button
              onClick={() => {
                modal.close();
                setSelectedKeywords([]);
              }}
              className={styles.closeModalButton}
            >
              <img
                src="/images/cross-x.png"
                alt="A black cross"
                width="20"
              ></img>
            </button>
          </div>
        </div>

        {selectedKeyword?.keyword === "about" && <About />}
        {selectedKeyword?.keyword === "changelog" && <Changelog />}

        {selectedKeyword &&
          selectedKeyword.keyword !== "about" &&
          selectedKeyword.keyword !== "changelog" && (
            <div className={styles.keywordContainer}>
              <h2 className={styles.header2}>
                {selectedKeyword.name}{" "}
                {selectedKeyword.tag && `(${selectedKeyword.tag})`}
              </h2>
              <RenderContent
                descriptions={selectedKeyword.descriptions}
                selectKeyword={selectKeyword}
              />
              <RelatedKeywords
                related={selectedKeyword.related_keywords}
                modal={modal}
                selectKeyword={selectKeyword}
              />
            </div>
          )}
      </dialog>
    );
  };

  const onSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFilter(e.currentTarget.value);
  };

  const searchContent = useCallback(() => {
    const search = new RegExp(filter.toLowerCase());
    const result = rulesDocument.keywords
      .toSorted(sortKeyword)
      .filter((keyword) => {
        if (keyword.descriptions.length === 0) {
          return false;
        }
        const keywordResult = rulesDocument.keywords.filter(() =>
          search.test(keyword.name.toLowerCase())
        );
        if (keywordResult.length > 0) {
          return true;
        }

        const keys = keyword.descriptions.filter((description) => {
          switch (description.type) {
            case "text":
            case "header":
            case "structured_list":
              if (description && typeof description.content === "string") {
                return search.test(description.content.toLowerCase());
              }
              return false;
            case "reference":
              return search.test(description.referenced_keyword.toLowerCase());
            case "keyword_list":
              return search.test(description.content.join().toLowerCase());
            default:
              return false;
          }
        });
        return keys.length > 0;
      });
    return result;
  }, [filter]);

  const getFilteredItems = useCallback(() => {
    if (filter.length < 2) {
      return [];
    }
    const result = searchContent();
    if (result.length === 0) {
      const nothing: Keyword = {
        keyword: "search_result_blank",
        name: "[No search results]",
        descriptions: [],
        parents: [],
        related_keywords: [],
      };
      return [nothing];
    }
    return searchContent();
  }, [filter.length, searchContent]);

  const searchComponent = () => {
    return (
      <div className={styles.searchContainer}>
        <div className={styles.searchInputContainer}>
          <input
            placeholder="Search"
            className={styles.searchInput}
            type="text"
            value={filter}
            id="search"
            onChange={onSearchChange}
            autoComplete="new-password"
          ></input>
          <button className={styles.button} onClick={() => setFilter("")}>
            X
          </button>
        </div>
        <div className={styles.searchResult}>
          {getFilteredItems().map((item) => (
            <KeywordCard
              keyword={item}
              key={getKey(item.keyword)}
              selectKeyword={selectKeyword}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <main className={styles.main}>
      {modalComponent()}
      <div className={styles.headline}>
        <h1 className={styles.title}>Legion Helper</h1>
        <span className={styles.subtitle}>&quot;Roger, Roger&quot;</span>
        <img
          src="/images/legionhelper.svg"
          alt="A drawing of a B1 Battle droid."
          className={styles.logo}
        />
      </div>
      <div className={styles.aboutContainer}>
        <div className={styles.changelogButton}>
          <button
            className={styles.button}
            onClick={() =>
              selectKeyword(
                rulesDocument.keywords.find(
                  (keyword) => keyword.keyword === "coming_from_pre_2024"
                )!
              )
            }
          >
            Biggest changes from version prior to 2024s 2.6.0 version.
          </button>
        </div>
        <div className={styles.aboutButtonRow}>
          <button
            className={styles.button}
            onClick={() =>
              selectKeyword(
                rulesDocument.keywords.find(
                  (keyword) => keyword.keyword === "about"
                )!
              )
            }
          >
            About Legion Helper
          </button>
          <button
            className={styles.button}
            onClick={() => window.open(rulesDocument.documentUrl, "_blank")}
          >
            Official Document
          </button>
          <button
            className={styles.button}
            onClick={() => window.open(rulesDocument.discussionUrl, "_blank")}
          >
            Official Rules Forum
          </button>
        </div>
        <div className={styles.infoContainer}>
          <div className={styles.versionInfo}>
            Current version of the rules reference updated:{" "}
            <span className={styles.version}>{rulesDocument.version}</span>{" "}
            valid from{" "}
            <span className={styles.date}>
              {new Date(rulesDocument.validFrom).toLocaleDateString()}.
            </span>
          </div>
        </div>
      </div>

      <div className={styles.content}>
        {searchComponent()}

        {rulesDocument.index
          .filter((dictionary) => dictionary.catalog === "alphabet")
          .map((catalog) => (
            <CatalogCard
              key={getKey(catalog.id)}
              catalog={catalog}
              selectKeyword={selectKeyword}
            />
          ))}
      </div>
      <div className={styles.footerContainer}>
        <div className={styles.versionInfo}>
          Current version of Legion Helper:{" "}
          <button
            className={classNames(styles.version, styles.button)}
            onClick={() =>
              selectKeyword(
                rulesDocument.keywords.find(
                  (keyword) => keyword.keyword === "changelog"
                )!
              )
            }
          >
            {rulesDocument.helperVersion}
          </button>
        </div>
        <div id="donate-button-container" className={styles.donate}>
          <div id="donate-button"></div>
        </div>
        <Script id="PayPal">{`PayPal.Donation.Button({
env:'production',
hosted_button_id:'PCSQHJMWUZSWN',
image: {
src:'https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif',
alt:'Donate with PayPal button',
title:'PayPal - The safer, easier way to pay online!',
}
}).render('#donate-button');`}</Script>

        <a
          href="https://twitter.com/intent/tweet?screen_name=takras&ref_src=twsrc%5Etfw"
          className="twitter-mention-button"
          data-size="large"
          data-show-count="false"
        >
          Give feedback to @takras
        </a>
        <script async src="https://platform.twitter.com/widgets.js"></script>
      </div>
    </main>
  );
}
