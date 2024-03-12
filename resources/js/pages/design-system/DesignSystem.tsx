import { LayoutGrid } from "@/components/LayoutGrid"
import { UiBox } from "@/components/UiBox"
import { UiButton } from "@/components/UiButton"
import { UiLayout } from "@/components/UiLayout"
import { UiTypo } from "@/components/UiTypo"
import { Link } from "react-router-dom"
import { systems } from "@/pages/design-system/blocs"

const DesignSystem: React.FC = () => {
  return (
    <UiLayout>
      <UiTypo as="h1">Design System</UiTypo>

      <LayoutGrid
        className="mt-4"
        lg={2}
        xl={3}
      >
        {systems.map((system, index) => (
          <UiBox
            key={index}
            variant="tertiary"
          >
            <UiBox variant="secondary">
              <UiTypo
                as="h4"
              >
                {system.name}
              </UiTypo>
              <UiTypo
                as="p"
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
          variant="outline"
        >Back
        </UiButton>
      </Link>
    </UiLayout>
  )
}

export default DesignSystem