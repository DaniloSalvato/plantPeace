interface LabelsProps {
  labels: string[]
}

export default function Labels({ labels }: LabelsProps) {
  return (
    <div className="font-raleway text-customDarkGreen *:bg-customLightGreen *:py-2 *:px-3 *:rounded-full *:border-2 *:border-customGreen flex gap-2">
      {labels.map((item) => (
        <span key={item}>{item}</span>
      ))}
    </div>
  )
}
