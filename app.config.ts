export default defineAppConfig({
  ui: {
    colors: {
      primary: "yellow"
    },
    container: {
      base: "max-w-full px-0 pt-4 lg:px-0 sm:px-0"
    },
    button: {
      slots: {
        base: ["rounded-full cursor-pointer"]
      },
      variants: {
        size: {
          xl: {
            base: "py-3"
          }
        }
      },
      compoundVariants: [
        {
          color: "primary",
          variant: "solid",
          class: "text-black"
        }
      ],
      defaultVariants: {
        size: "xl"
      }
    },
    modal: {
      slots: {
        overlay: "bg-[#282828]/[0.75]",
        content:
          "max-h-[calc(100%-24px)] p-6 gap-4 w-11/12 h-auto border-0 rounded-[24px] lg:rounded-[24px]",
        header: "p-0 sm:p-0 border-0",
        title: "text-lg",
        body: "p-0 border-0 sm:p-0",
        footer: "p-0 sm:p-0 border-0"
      }
    }
  }
});
