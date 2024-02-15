import { LayoutGrid } from "@/components/global/LayoutGrid"
import { UiBox } from "@/components/global/UiBox"
import { UiButton } from "@/components/global/UiButton"
import { UiLayout } from "@/components/global/UiLayout"
import { UiTypo } from "@/components/global/UiTypo"
import { Link } from "react-router-dom"
import { systems } from "@/pages/design-system/blocs"

const DesignSystem: React.FC = () => {
  return (
    <UiLayout>
      <UiTypo kind="h1">Design System</UiTypo>

      <LayoutGrid
        className="mt-4"
        lg={2}
        xl={3}
      >
        {systems.map((system, index) => (
          <UiBox
            key={index}
            kind="tertiary"
            className="bg-secondary-hover"
          >
            <UiBox kind="secondary">
              <UiTypo
                kind="h4"
              >
                {system.name}
              </UiTypo>
              <UiTypo
                kind="p"
              >
                {system.description}
              </UiTypo>
            </UiBox>
            <div className="py-4"><system.block /></div>
          </UiBox>
        ))}
      </LayoutGrid>

      <Link to="/">
        <UiButton
          className="mt-4"
          outlined
        >Back
        </UiButton>
      </Link>
    </UiLayout>
  )
}

export default DesignSystem