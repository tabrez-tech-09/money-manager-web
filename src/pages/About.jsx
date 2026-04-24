import Header from "../components/Header";

const About = () => {
  return (
    <div className="bg-[#f5f7fb] text-gray-800 font-sans pt-20">
      <Header />

      {/* Hero Section */}
      <section className="text-center py-20 px-6 bg-gradient-to-r from-purple-600 to-pink-500 text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          About Money Manager
        </h1>
        <p className="max-w-2xl mx-auto text-lg opacity-90">
          Smart way to manage your income, expenses and take full control of your finances.
        </p>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose Us?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-2">
            <div className="text-4xl mb-3">📊</div>
            <h2 className="text-xl font-semibold mb-2">Track Expenses</h2>
            <p className="text-gray-500">
              Easily record and monitor your daily transactions in one place. Detail view of all your expenses and income with just a few clicks.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-2">
            <div className="text-4xl mb-3">📈</div>
            <h2 className="text-xl font-semibold mb-2">Analytics</h2>
            <p className="text-gray-500">
              Visual charts help you understand your spending habits.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-2">
            <div className="text-4xl mb-3">🔐</div>
            <h2 className="text-xl font-semibold mb-2">Secure</h2>
            <p className="text-gray-500">
              Your data is protected with secure authentication.
            </p>
          </div>

        </div>
      </section>

      {/* Developer Section */}
      <section className="py-20 px-6 bg-white text-center">
        <h2 className="text-3xl font-bold mb-4">About Developer</h2>
        <p className="max-w-2xl mx-auto text-gray-600 text-lg">
          This project is developed by{" "}
          <span className="font-semibold text-purple-600">
            Tabrez Rabbani
          </span>, a Full Stack Developer skilled in React, Spring Boot and MySQL.
        </p>
      </section>

      {/* Tech Stack */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">Tech Stack</h2>

        <div className="flex flex-wrap justify-center gap-4">
          <span className="px-5 py-2 bg-purple-100 text-purple-700 rounded-full font-medium">
            React
          </span>
          <span className="px-5 py-2 bg-green-100 text-green-700 rounded-full font-medium">
            Spring Boot
          </span>
          <span className="px-5 py-2 bg-blue-100 text-blue-700 rounded-full font-medium">
            MySQL
          </span>
          <span className="px-5 py-2 bg-gray-200 text-gray-700 rounded-full font-medium">
            Tailwind CSS
          </span>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-20 bg-gradient-to-r from-purple-600 to-pink-500 text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Start Managing Your Finances Today 🚀
        </h2>
        <p className="mb-6 text-lg opacity-90">
          Take control of your money with ease.
        </p>

        <a
          href="/signup"
          className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
        >
          Get Started
        </a>
      </section>
    </div>
  );
};

export default About;