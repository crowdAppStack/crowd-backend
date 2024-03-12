import { LayoutFlex } from "@/components/LayoutFlex"
import { UiBox } from "@/components/UiBox"
import { UiButton } from "@/components/UiButton"
import { UiInfo } from "@/components/UiInfo"
import { UiInput } from "@/components/UiInput"
import { UiTypo } from "@/components/UiTypo"

export type System = {
  name: string;
  description: string;
  block: React.FC;
}

export const systems: System[] = [
  {
    name: 'Typos',
    description: 'The typography system for the application',
    block: () => (
      <>
        <UiTypo
          as="h1"
          className="text-center"
        >
          H1 text
        </UiTypo>
        <UiTypo
          as="h2"
          className="text-center"
        >
          H2 text
        </UiTypo>
        <UiTypo
          as="h3"
          className="text-center"
        >
          H3 text
        </UiTypo>
        <UiTypo
          as="h4"
          className="text-center"
        >
          H4 text
        </UiTypo>
        <UiTypo
          as="h5"
          className="text-center"
        >
          H5 text
        </UiTypo>
        <UiTypo
          as="h6"
          className="text-center"
        >
          H6 text
        </UiTypo>

        <hr className="m-2 block border"/>

        <UiTypo
          as="h4"
          className="text-center"
        >
          Primary Color
        </UiTypo>

        <UiTypo
          as="h4"
          color="secondary"
          className="text-center"
        >
          Secondary Color
        </UiTypo>
      </>
    ),
  },
  {
    name: 'Colors',
    description: 'The color system for the application',
    block: () => (
      <>
        <LayoutFlex
          align="center"
          gap={2}
        >
          <UiBox
            variant="primary"
            className="border border-base"
          >
          </UiBox>
          <UiTypo as="h6">Primary</UiTypo>
        </LayoutFlex>

        <LayoutFlex
          align="center"
          gap={2}
        >
          <UiBox
            variant="secondary"
            className="border border-base"
          >
          </UiBox>
          <UiTypo as="h6">Secondary</UiTypo>
        </LayoutFlex>

        <LayoutFlex
          align="center"
          gap={2}
        >
          <UiBox
            variant="secondary"
            className="border border-base"
          >
          </UiBox>
          <UiTypo as="h6">Tertiary</UiTypo>
        </LayoutFlex>
      </>
    ),
  },
  {
    name: 'Buttons',
    description: 'The button system for the application',
    block: () => (
      <LayoutFlex
        direction="column"
        gap={2}
        className="mt-2"
      >
        <UiButton>Primary</UiButton>

        <UiButton variant="ghost">Secondary</UiButton>

        <UiButton variant="outline">Primary Outlined</UiButton>
      </LayoutFlex>
    ),
  },
  {
    name: 'Input',
    description: 'The input system for the application',
    block: () => (
      <LayoutFlex
        direction="column"
        gap={4}
        className="mt-2"
      >
        <UiInput
          variant="primary"
          placeholder="Primary"
          type="text"
        />

        <UiInput
          variant="secondary"
          placeholder="Secondary"
          type="text"
        />

        <UiInput
          variant="primary"
          outlined
          placeholder="Primary Outlined"
          type="text"
        />

        <UiInput
          variant="secondary"
          outlined
          placeholder="Secondary Outlined"
          type="text"
        />
      </LayoutFlex>
    ),
  },
  {
    name: 'Infos',
    description: 'The info system for the application',
    block: () => (
      <LayoutFlex
        direction="column"
        gap={2}
        className="mt-2"
      >
        <UiInfo variant="success">This is a success </UiInfo>
        <UiInfo variant="info">This is an info </UiInfo>
        <UiInfo variant="warn">This is a warning </UiInfo>
        <UiInfo variant="error">This is an error  </UiInfo>
      </LayoutFlex>
    ),
  }
]