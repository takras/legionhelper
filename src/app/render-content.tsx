import { DescriptionType, Keyword } from "@/types";
import { ExampleContent } from "./example";
import { getEnrichedKeyword, getKey, interpolateString } from "@/utils";
import { Illustration } from "./illustration";
import { KeywordList } from "./keyword-list";
import { StructuredList } from "./structured-list";
import { CalloutComponent } from "./callout";
import styles from "./helper.module.css";

export const RenderContent = ({
  descriptions,
  selectKeyword,
}: {
  descriptions: DescriptionType;
  selectKeyword: (keyword: Keyword) => void;
}) => {
  const renderedKeywords: string[] = [];
  const reference = ({
    reference,
    summaryOnly,
  }: {
    reference: string;
    summaryOnly?: boolean;
  }) => {
    const enriched = getEnrichedKeyword(reference);
    if (!enriched) {
      return null;
    }
    const filteredDescriptions = enriched.descriptions.filter((description) => {
      switch (description.type) {
        case "reference":
          return !renderedKeywords.includes(reference);
        default:
          return true;
      }
    });

    renderedKeywords.push(reference);

    const withHeader: DescriptionType = [
      { type: "header", content: enriched.name },
      ...filteredDescriptions,
    ];

    if (filteredDescriptions.length > 0 && !summaryOnly) {
      return (
        <RenderContent
          key={getKey(reference)}
          descriptions={withHeader}
          selectKeyword={selectKeyword}
        />
      );
    }

    return (
      <div className={styles.referenceContainer} key={getKey(reference)}>
        {!summaryOnly && enriched.summary && (
          <div className={styles.referenceSummary}>
            {interpolateString(enriched?.summary, enriched.name)}
          </div>
        )}
        <div className={styles.referenceLink}>
          <div>See:</div>
          <button
            className={styles.referenceButton}
            onClick={() => selectKeyword(enriched)}
          >
            {enriched?.name}
          </button>
        </div>
      </div>
    );
  };

  return descriptions.map((description) => {
    switch (description.type) {
      case "example":
        return (
          <ExampleContent
            key={getKey(description.type)}
            descriptions={description.content}
            isInitiallyExpanded={description.initiallyExpanded}
            selectKeyword={selectKeyword}
          />
        );
      case "header":
        return (
          <h4 className={styles.header4} key={getKey(description.type)}>
            {description.content}
          </h4>
        );
      case "illustration":
        return (
          <Illustration key={getKey(description.altText)} image={description} />
        );
      case "keyword_list":
        return (
          <KeywordList
            key={getKey(description.type)}
            keywords={description.content}
          />
        );
      case "reference":
        return reference({
          reference: description.referenced_keyword,
          summaryOnly: description.showOnlySummary,
        });
      case "structured_list_numbered":
      case "structured_list":
        return (
          <StructuredList
            key={getKey(description.type)}
            isTopLevel={true}
            index={1}
            list={description.content}
            isNumbered={description.type === "structured_list_numbered"}
          />
        );
      case "callout":
        return (
          <CalloutComponent
            key={getKey(description.type)}
            reference={description.callout_keyword}
            selectKeyword={selectKeyword}
          />
        );
      case "text":
      default:
        return interpolateString(
          description.content,
          getKey(description.content),
          styles.paragraph
        );
    }
  });
};
