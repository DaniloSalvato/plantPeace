import { MdVerified } from "react-icons/md";

type IsVisible = {
  isVisible: boolean;
};

export default function Modal({ isVisible }: IsVisible) {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm z-40 flex justify-center items-center">
      <div className="w-[300px]">
        <div className="flex justify-between items-center bg-white p-5 rounded border-t-8 border-green-600">
          <span className="">Plant successfully registered!</span><MdVerified className="text-green-600 size-10" />
        </div>
      </div>
    </div>
  );
}
