import Header from '../components/Header'
import CopyRight from './../components/CopyRight'
const rulesData = [
  {
    id: 1,
    title:
      'নিজ নিজ ব্যবহার্য জিনিসপত্র পরিচ্ছন্ন ও পরিপাটিভাবে গুছিয়ে রাখতে হবে।',
  },
  {
    id: 2,
    title:
      'পড়াশোনার সময় উচ্চস্বরে কথা বলা, পড়া, গান গাওয়া বা বাজানো থেকে বিরত থাকতে হবে। ',
  },
  {
    id: 3,
    title: 'কক্ষে ধূমপান সম্পূর্ণভাবে নিষেধ।',
  },
  {
    id: 4,
    title: 'কক্ষের ভেতর তাস বা জুয়া খেলা কিংবা আড্ডা যাবে না।',
  },
  {
    id: 5,
    title:
      'দেয়ালে কোনো কিছু লেখা বা ছবি আঁকা যাবে না কিংবা অশালীন ছবি টানানো যাবে না।',
  },
  {
    id: 6,
    title:
      'জমাকৃত ময়লা হোস্টেলের বাইরে কিংবা নির্ধারিত স্থান ডাস্টবিন বা ঝুড়িতে ফেলতে হবে।',
  },
  {
    id: 7,
    title: 'অন্যের ব্যবহার্য জিনিস ব্যবহার করা থেকে বিরত থাকতে হবে।',
  },
  {
    id: 8,
    title:
      'হোস্টেল সদস্য ছাড়া বাইরের কেউ পারমিশন ছাড়া হোস্টেল কক্ষে যেতে পারবেন না।',
  },
  {
    id: 9,
    title:
      'মহিলা অভিভাবকদের হোস্টেলের ভেতর সাক্ষাতের অনুমতি দেয়া যাবে না। ।',
  },
  {
    id: 10,
    title:
      'যথাযথ কারণ ছাড়া সন্ধ্যার পরে হোস্টেলের বাইরে যাওয়া বা থাকা যাবে না।',
  },
  {
    id: 11,
    title:
      'দুর্ঘটনা বা অসুস্থতাজনিত কারণে বাইরে যেতে হলে হোস্টেল কন্ট্রোলারকে অবহিত করতে হবে।',
  },
  {
    id: 12,
    title: 'কক্ষ ত্যাগের পূর্বে লাইট ও ফ্যানের সুইচ বন্ধ করে যেতে হবে।',
  },
  {
    id: 13,
    title: 'লন্ড্রি, হিটার বা ইলেকট্রিক চুলা ব্যবহার সম্পূর্ণভাবে নিষেধ।',
  },
  {
    id: 14,
    title: 'বাথরুম ও টয়লেট ব্যবহারের পর পর্যাপ্ত পানি ব্যবহার করবেন।',
  },
  {
    id: 15,
    title:
      'ব্যবহৃত সাবান, শ্যাম্পু অথবা অন্য কোন ধরণের প্যাকেট বাথরুমে বা কমোডে ফেলা যাবে না।',
  },
  {
    id: 16,
    title: 'গোসল বা কাপড় ধোয়ার পর বাথরুমের পরিছন্নতা নিশ্চিত করবেন।',
  },
  {
    id: 17,
    title:
      'ছুটিতে যাওয়ার সময় নিজ দায়িত্বে খাবার মিল বন্ধ ও আসার পর তা চালু করবেন।',
  },
  {
    id: 18,
    title:
      'শৃঙ্খলা পরীপন্থী কর্মকান্ডে নিজেকে জড়াবেন না কিংবা অন্য কাউকে প্রশ্রয় দিবেন না ।',
  },
]

function rules() {
  return (
    <div>
      <Header />
      <section className="body-font text-gray-600">
        <div className="container mx-auto px-5 py-14">
          <div className="mb-10 text-center">
            <h1 className="title-font mb-4 text-center text-2xl font-medium text-gray-900 sm:text-3xl">
              আমাদের হোস্টেলের নিয়ম-কানুন
            </h1>
          </div>
          <div className="-mx-2 flex flex-wrap sm:mx-auto sm:mb-2 lg:w-4/5">
            {rulesData.map((rule) => (
              <div key={rule.id} className="w-full p-2 sm:w-1/2">
                <div className="flex h-full items-center rounded bg-gray-100 p-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-4 h-6 w-6 flex-shrink-0 text-indigo-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z"
                      clipRule="evenodd"
                    />
                  </svg>

                  <span className="title-font font-medium">{rule.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CopyRight />
    </div>
  )
}

export default rules
