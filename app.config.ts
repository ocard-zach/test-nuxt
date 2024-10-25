export default defineAppConfig({
  ui: {
    colors: {
      primary: 'yellow'
    },
    container: {
      base: 'max-w-full px-0 pt-4 lg:px-0 sm:px-0'
    },
    button: {
      slots: {
        base: ['rounded-full cursor-pointer']
      },
      variants: {
        size: {
          xl: {
            base: 'py-3'
          }
        }
      },
      compoundVariants: [
        {
          color: 'primary',
          variant: 'solid',
          class: 'text-black'
        }
      ],
      defaultVariants: {
        size: 'xl'
      }
    },
    modal: {
      slots: {
        overlay: 'bg-[#282828]/[0.75]',
        content:
          'max-h-[calc(100vh-24px)] my-0! w-11/12 h-auto border-0 rounded-[24px] lg:rounded-[24px]'
      }
    }
  }
});
