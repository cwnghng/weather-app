const SectionHeader: React.FC<IProps> = (props: IProps) => {
  const { title } = props
  return (
    <div className="flex justify-center font-bold p-6">
      <h1>{title}</h1>
    </div>
  )
}

interface IProps {
  title: string
}

export default SectionHeader
