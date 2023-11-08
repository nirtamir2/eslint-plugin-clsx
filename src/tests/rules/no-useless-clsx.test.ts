import rule from "../../rules/no-useless-clsx";
import { ruleTester } from "./ruleTester";

ruleTester.run("no-useless-clsx", rule, {
  invalid: [
    {
      code: `clsx("constant")`,
      output: `"constant"`,
      errors: [
        {
          message: "Useless 'clsx' function call with literal argument."
        }
      ]
    },
    {
      code: `cn("constant")`,
      output: `"constant"`,
      errors: [
        {
          message: "Useless 'cn' function call with literal argument."
        }
      ]
    },
    {
      code: `classNames("constant")`,
      output: `"constant"`,
      errors: [
        {
          message: "Useless 'classNames' function call with literal argument."
        }
      ]
    },
    {
      code: `myCustomFunction("constant")`,
      options: [{ additionalFunctionNames: ["myCustomFunction"] }],
      output: `"constant"`,
      errors: [
        {
          message:
            "Useless 'myCustomFunction' function call with literal argument."
        }
      ]
    }
  ],
  valid: [
    `clsx("a", "b")`,
    `clsx({"a": selected})`,
    `clsx(isPrimary && "primary")`,
    `clsx(isPrimary ? "primary" : secondary)`,
    `clsx("button", {"primary": isPrimary})`,
    `clsx(["button", {"primary": isPrimary}])`,
    `classNames(["button", {"primary": isPrimary}])`,
    `cn(["button", {"primary": isPrimary}])`,
    {
      code: `myCustomFn(["button", {"primary": isPrimary}])`,
      options: [{ additionalFunctionNames: ["myCustomFn"] }]
    }
  ]
});
