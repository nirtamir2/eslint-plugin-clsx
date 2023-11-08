import { createRule } from "../createRule";

export default createRule({
  meta: {
    type: "problem",
    docs: {
      url: "https://github.com/nirtamir2/eslint-plugin-package-clsx#readme",
      description: 'enforce use of "clsx" with dynamic data argument',
      category: "Best Practices",
      recommended: true,
    },
    fixable: "code",
    schema: [
      {
        type: "object",
        properties: {
          additionalFunctionNames: {
            anyOf: [
              {
                type: ["array"],
                items: {
                  type: ["string"],
                },
              },
            ],
          },
        },
      },
    ],
    messages: {
      uselessClsx:
        "Useless '{{ functionName }}' function call with literal argument.",
    },
  },

  create(context) {
    const configFunctionNames =
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      (context.options[0]?.additionalFunctionNames as
        | Array<string>
        | undefined) ?? [];

    const functionNames = new Set([
      "clsx",
      "cn",
      "classNames",
      ...configFunctionNames,
    ]);

    return {
      CallExpression(node) {
        if (!("name" in node.callee)) {
          return;
        }
        const functionName = node.callee.name;

        if (functionNames.has(functionName)) {
          const isSingleArgument = node.arguments.length === 1;
          if (!isSingleArgument) {
            return;
          }

          const functionArgument = node.arguments[0];

          if (
            functionArgument != null &&
            "type" in functionArgument &&
            functionArgument.type === "Literal"
          ) {
            context.report({
              node,
              messageId: "uselessClsx",
              data: {
                functionName,
              },
              fix(fixer) {
                return fixer.replaceText(
                  context.sourceCode.ast,
                  functionArgument.raw ?? "",
                );
              },
            });
          }
        }
      },
    };
  },
});
