import Link from 'next/link';
import { redirect } from 'next/navigation';

import ResultImage from '@/components/result/ResultImage/ResultImage';
import ResultInfo from '@/components/result/ResultInfo/ResultInfo';
import { getDog } from '@/helpers/dog';
import { getCat } from '@/helpers/cat';

type ResulePageProps = {
  params: {
    key: string;
  };
};
const ResultPage = ({ params: { key } }: ResulePageProps) => {

  const getAnimal = () => {
    const dog = getDog(key);
    if (dog) {
      return {type: 'dog', animal: dog};
    } else {
      return {type: 'cat', animal: getCat(key)};
    }
  }
  const {type, animal} = getAnimal();

  if (!animal) {
    redirect('/');
  }

  return (
    <div className="bg-result min-h-screen">
      <div className="mx-auto max-w-lg px-4 py-4">
        <div>
          <div className="-mx-2 my-4 flex items-end">
            <div className="w-5/12 px-2">
              <ResultImage image={animal.image} name={animal.name} />
            </div>
            <div className="w-7/12 px-2 text-center text-brown-text">
              <p className="font-bold text-lg">คุณเหมาะกับน้อง{type === 'dog' ? 'หมา' : 'แมว'}พันธุ์</p>
              <p className="font-bold text-3xl">{animal.name}</p>
              <div className="-mx-1 my-2 flex items-center justify-center">
                {animal.habits.map((habit) => (
                  <div
                    key={habit.toLowerCase()}
                    className="mx-1 px-2 py-1 rounded-full bg-brown-bg"
                  >
                    <p className="text-white text-xs font-bold">{habit}</p>
                  </div>
                ))}
              </div>
              <div className="px-4 py-2 w-full bg-[#9B776B] rounded-xl text-white">
                <ul className="text-left text-sm font-bold">
                  {animal.details.map((detail) => (
                    <li key={detail}>• {detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="my-4">
            <ResultInfo title="ข้อควรรู้">
              <p>{animal.tip}</p>
            </ResultInfo>
          </div>
          <div className="my-4 -mx-1 flex items-stretch">
            <div className="px-1 w-1/3">
              <ResultInfo title="ที่อยู่">
                <p className="font-bold text-sm">{animal.place}</p>
              </ResultInfo>
            </div>
            <div className="px-1 w-1/3">
              <ResultInfo title="ขนาด">
                {animal.weight.male ? (
                  <>
                    <table className="text-[9px] text-left">
                      <tbody>
                        <tr>
                          <td className="px-1 text-left font-bold">เพศผู้:</td>
                          <td>
                            ส่วนสูง {animal.height.male?.min}-
                            {animal.height.male?.max} ซม.
                          </td>
                        </tr>
                        <tr>
                          <td />
                          <td>
                            น้ำหนัก {animal.weight.male?.min}-
                            {animal.weight.male?.max} กก.
                          </td>
                        </tr>
                        <tr>
                          <td className="px-1 text-left font-bold">เพศเมีย:</td>
                          <td>
                            ส่วนสูง {animal.height.female?.min}-
                            {animal.height.female?.max} ซม.
                          </td>
                        </tr>
                        <tr>
                          <td />
                          <td>
                            น้ำหนัก {animal.weight.female?.min}-
                            {animal.weight.female?.max} กก.
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </>
                ) : (
                  <>
                    <p className="font-bold text-xs">{animal.size}</p>
                    <p className="text-xs">
                      น้ำหนัก {animal.weight.min} - {animal.weight.max} กก.
                    </p>
                    <p className="text-xs">
                      ส่วนสูง {animal.height.min} - {animal.height.max} ซม.
                    </p>
                  </>
                )}
              </ResultInfo>
            </div>
            <div className="px-1 w-1/3">
              <ResultInfo title="ค่าใช้จ่าย">
                <p className="font-bold text-lg">
                  {animal.cost.min.toLocaleString()} -{' '}
                  {animal.cost.max.toLocaleString()}
                </p>
                <p>บาท/เดือน</p>
              </ResultInfo>
            </div>
          </div>
          <div className="my-4 -mx-1 flex items-stretch">
            <div className="px-1 w-1/2">
              <ResultInfo title="สิ่งที่น้องต้องการ">
                <ul className="px-2 text-left text-sm">
                  {animal.wanting.map((want) => (
                    <li key={want}>
                      {animal.wanting.length > 1 && '•'} {want}
                    </li>
                  ))}
                </ul>
              </ResultInfo>
            </div>
            <div className="px-1 w-1/2">
              <ResultInfo title="โรคประจำพันธุ์">
                <ul className="px-2 text-left text-sm">
                  {animal.diseases.map((disease) => (
                    <li key={disease}>• {disease}</li>
                  ))}
                </ul>
              </ResultInfo>
            </div>
          </div>
        </div>
        <div className="my-8 flex flex-col items-center">
          <Link href="/" className="text-brown-text font-bold">
            กลับสู่หน้าหลัก
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ResultPage;
