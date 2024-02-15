import { LayoutFlex } from "@/components/global/LayoutFlex"
import { UiBox } from "@/components/global/UiBox"
import { UiButton } from "@/components/global/UiButton"
import { UiInfo } from "@/components/global/UiInfo"
import { UiInput } from "@/components/global/UiInput"
import { UiTypo } from "@/components/global/UiTypo"

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
          kind="h1"
          className="text-center"
        >
          H1 text
        </UiTypo>
        <UiTypo
          kind="h2"
          className="text-center"
        >
          H2 text
        </UiTypo>
        <UiTypo
          kind="h3"
          className="text-center"
        >
          H3 text
        </UiTypo>
        <UiTypo
          kind="h4"
          className="text-center"
        >
          H4 text
        </UiTypo>
        <UiTypo
          kind="h5"
          className="text-center"
        >
          H5 text
        </UiTypo>
        <UiTypo
          kind="h6"
          className="text-center"
        >
          H6 text
        </UiTypo>

        <hr className="m-2 block border"/>

        <UiTypo
          kind="h4"
          className="text-center"
        >
          Primary Color
        </UiTypo>

        <UiTypo
          kind="h4"
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
            kind="primary"
            className="border border-primary"
          >
          </UiBox>
          <UiTypo kind="h6">Primary</UiTypo>
        </LayoutFlex>

        <LayoutFlex
          align="center"
          gap={2}
        >
          <UiBox
            kind="secondary"
            className="border border-primary"
          >
          </UiBox>
          <UiTypo kind="h6">Secondary</UiTypo>
        </LayoutFlex>

        <LayoutFlex
          align="center"
          gap={2}
        >
          <UiBox
            kind="tertiary"
            className="border border-primary"
          >
          </UiBox>
          <UiTypo kind="h6">Tertiary</UiTypo>
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

        <UiButton kind="secondary">Secondary</UiButton>

        <UiButton outlined>Primary Outlined</UiButton>

        <UiButton
          kind="secondary"
          outlined
        >Secondary Outlined
        </UiButton>
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
          kind="primary"
          placeholder="Primary"
          type="text"
        />

        <UiInput
          kind="secondary"
          placeholder="Secondary"
          type="text"
        />

        <UiInput
          kind="tertiary"
          placeholder="Tertiary"
          type="text"
        />

        <UiInput
          kind="primary"
          outlined
          placeholder="Primary Outlined"
          type="text"
        />

        <UiInput
          kind="secondary"
          outlined
          placeholder="Secondary Outlined"
          type="text"
        />

        <UiInput
          kind="tertiary"
          outlined
          placeholder="Tertiary Outlined"
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
        <UiInfo kind="success">This is a success </UiInfo>
        <UiInfo kind="info">This is an info </UiInfo>
        <UiInfo kind="warn">This is a warning </UiInfo>
        <UiInfo kind="error">This is an error  </UiInfo>
      </LayoutFlex>
    ),
  }
]