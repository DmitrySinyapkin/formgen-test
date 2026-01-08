import type { Props as FieldProps } from "@/components/Form/FormField/types" 

export type Props = Pick<FieldProps, 'label' | 'attrs' | 'name'| 'options'>