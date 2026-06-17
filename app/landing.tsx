export default function LandingPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 text-center bg-gray-50">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
        خیالت از سفارش‌ها راحت باشه! <br />
        <span className="text-blue-600">رستورانت رو هوشمند و بدون دردسر مدیریت کن.</span>
      </h1>
<p className="text-xl text-gray-600 mb-8 max-w-2xl">
  من سیستمی برات طراحی می‌کنم که سفارشات رو خودکار و دقیق ثبت کنه؛ 
  با حذفِ خطاهایِ انسانی و افزایشِ سرعتِ سرویس‌دهی، 
  <span className="font-bold text-blue-700"> هم هزینه‌هایِ اضافه رو می‌زنم و هم سودِ خالصِ فروش‌ت رو بالا می‌برم.</span>
</p>
      <button className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:bg-blue-700 transition duration-300">
       مشاوره رایگان برای افزایش سود رستوران
      </button>
    </div>
  );
}