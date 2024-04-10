import Link from 'next/link';
import { redirect } from 'next/navigation';

import ResultImage from '@/components/result/ResultImage/ResultImage';
import ResultInfo from '@/components/result/ResultInfo/ResultInfo';
import { getDog } from '@/helpers/dog';

type ResulePageProps = {
  params: {
    key: string;
  };
};
const ResultPage = ({ params: { key } }: ResulePageProps) => {
  const dog = getDog(key);

  if (!dog) {
    redirect('/');
  }

  return (
    <div className="bg-result min-h-screen">
      <div className="mx-auto max-w-lg px-4 py-4">
        <div>
          <div className="-mx-2 my-4 flex items-end">
            <div className="w-5/12 px-2">
              <ResultImage image={dog.image} name={dog.name} />
            </div>
            <div className="w-7/12 px-2 text-center text-brown-text">
              <p className="font-bold text-lg">คุณเหมาะกับน้องหมาพันธุ์</p>
              <p className="font-bold text-3xl">{dog.name}</p>
              <div className="-mx-1 my-2 flex items-center justify-between">
                {dog.habits.map((habit) => (
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
                  {dog.details.map((detail) => (
                    <li key={detail}>• {detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="my-4">
            <ResultInfo title="ข้อควรรู้">
              <p>{dog.tip}</p>
            </ResultInfo>
          </div>
          <div className="my-4 -mx-1 flex items-stretch">
            <div className="px-1 w-1/3">
              <ResultInfo title="ที่อยู่">
                <p className="font-bold text-sm">{dog.place}</p>
              </ResultInfo>
            </div>
            <div className="px-1 w-1/3">
              <ResultInfo title="ขนาด">
                {dog.weight.male ? (
                  <>
                    <table className="text-[8px] text-left">
                      <tbody>
                        <tr>
                          <td className="px-1 text-left font-bold">เพศผู้:</td>
                          <td>
                            ส่วนสูง {dog.height.male?.min}-
                            {dog.height.male?.max} ซม.
                          </td>
                        </tr>
                        <tr>
                          <td />
                          <td>
                            น้ำหนัก {dog.weight.male?.min}-
                            {dog.weight.male?.max} กก.
                          </td>
                        </tr>
                        <tr>
                          <td className="px-1 text-left font-bold">เพศเมีย:</td>
                          <td>
                            ส่วนสูง {dog.height.female?.min}-
                            {dog.height.female?.max} ซม.
                          </td>
                        </tr>
                        <tr>
                          <td />
                          <td>
                            น้ำหนัก {dog.weight.female?.min}-
                            {dog.weight.female?.max} กก.
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </>
                ) : (
                  <>
                    <p className="font-bold text-xs">{dog.size}</p>
                    <p className="text-xs">
                      น้ำหนัก {dog.weight.min} - {dog.weight.max} กก.
                    </p>
                    <p className="text-xs">
                      ส่วนสูง {dog.height.min} - {dog.height.max} ซม.
                    </p>
                  </>
                )}
              </ResultInfo>
            </div>
            <div className="px-1 w-1/3">
              <ResultInfo title="ค่าใช้จ่าย">
                <p className="font-bold text-lg">
                  {dog.cost.min.toLocaleString()} -{' '}
                  {dog.cost.max.toLocaleString()}
                </p>
                <p>บาท/เดือน</p>
              </ResultInfo>
            </div>
          </div>
          <div className="my-4 -mx-1 flex items-stretch">
            <div className="px-1 w-1/2">
              <ResultInfo title="สิ่งที่น้องต้องการ">
                <ul className="px-2 text-left text-sm">
                  {dog.wanting.map((want) => (
                    <li key={want}>
                      {dog.wanting.length > 1 && '•'} {want}
                    </li>
                  ))}
                </ul>
              </ResultInfo>
            </div>
            <div className="px-1 w-1/2">
              <ResultInfo title="โรคประจำพันธุ์">
                <ul className="px-2 text-left text-sm">
                  {dog.diseases.map((disease) => (
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
