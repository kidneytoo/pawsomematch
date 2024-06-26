import Image from 'next/image';

type SceneDog4Props = {
  toNextScene: () => void;
};
const SceneCatStaff = ({ toNextScene }: SceneDog4Props) => {

  const handleSelect = () => {
    toNextScene();
  }

  return (
    <div className="mx-auto w-full max-w-lg min-h-screen relative">
      <Image
        className="object-cover"
        src="/images/quiz/bg-staff-cat.webp"
        alt="Home BG"
        fill
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent bg-opacity-50 z-10" />
      <>
        <div
          className="absolute inset-x-0 bottom-24 z-20 px-8"
        >
          <div className="mt-auto text-white text-center text-2xl flex flex-col items-center">
            <p className="mb-8">สนใจไปเจอน้องแมวเลยมั้ยคะ</p>
            <button
            className="my-1 w-full bg-white rounded-2xl px-6 py-2 text-brown-text text-xl"
            onClick={() => handleSelect()}>
            ไปหาน้องแมวกันเลย!
          </button>
          </div>
        </div>
      </>
    </div>
  );
};

export default SceneCatStaff;
