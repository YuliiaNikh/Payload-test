import { cn } from '@/utilities/ui'
import React from 'react'

const sizes = {
  h2: 'type-h2',
  h3: 'type-h3',
  h4: 'type-h4',
  h5: 'type-h5',
}

// Style Guide: titles may be medium, bold or extra bold
const weights = {
  bold: 'font-bold',
  extrabold: 'font-extrabold',
  medium: 'font-medium',
  regular: 'font-normal',
}

// Style Guide text colors: navy or red on brights, white or teal on darks only
const tones = {
  inherit: '',
  navy: 'text-pardes-navy',
  red: 'text-pardes-red',
  teal: 'text-pardes-teal',
  white: 'text-white',
}

type SectionHeadingProps = {
  as?: 'h1' | 'h2' | 'h3' | 'p'
  children: React.ReactNode
  className?: string
  size?: keyof typeof sizes
  tone?: keyof typeof tones
  weight?: keyof typeof weights
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  as: Tag = 'h2',
  children,
  className,
  size = 'h4',
  tone = 'red',
  weight = 'extrabold',
}) => <Tag className={cn(sizes[size], weights[weight], tones[tone], className)}>{children}</Tag>
