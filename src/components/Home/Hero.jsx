import { Logo } from "@/components/Layout/Logo";
import { Form } from "./Form/Form";

export const Hero = () => {
  return (
    <div className={`cat flex items-center justify-center h-[35vh] max-h-[500px] min-h-[230px] px-6 rounded-tr-3xl rounded-tl-3xl md:justify-start md:px-14 md:h-[88vh]`}>
      <div className="flex flex-col gap-4 w-full">
        <Logo color={"white"} className={"text-5xl text-white md:text-6xl"} size="w-48 md:w-64" />
        <span className="font-medium text-lg text-gray-100">Get to know more about your <br className="" /> cat breed</span>
        <Form />
      </div>
    </div>
  )
}