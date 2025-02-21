interface SpriteIconProps {
  name: string;
  width?: number;
  height?: number;
  className?: string;
}

const SpriteIcon = ({ name, width, height, className }: SpriteIconProps) => {
  return (
    <svg width={width} height={height} className={className} aria-hidden="true">
      <use xlinkHref={`#${name}`} />
    </svg>
  )
}

export default SpriteIcon;