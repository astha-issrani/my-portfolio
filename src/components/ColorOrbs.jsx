import { useTheme } from '../context/ThemeContext'

export default function ColorOrbs() {
  const { themeId } = useTheme()

  return (
    <div className="color-orbs" key={themeId} aria-hidden="true">
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />
      <div className="orb orb-4" />
      <div className="color-mesh" />
    </div>
  )
}
