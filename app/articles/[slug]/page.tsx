export async function generateMetadata() {
  const imageList = [
    {
      url: `/images/what-you-love.jpg`,
      width: 800,
      height: 600,
      alt: "what you love",
    },
    {
      url: `/images/what-you-love.jpg`,
      width: 1800,
      height: 1600,
      alt: "what you love",
    },
  ];
  const title = "လမ်းပြောက်နေတဲ့ လူငယ်များအတွက် ဆရာသက်ခိုင်ရဲ့ အကြံပေးစာ";
  return {
    title: `လမ်းပြောက်နေတဲ့ လူငယ်များအတွက် ဆရာသက်ခိုင်ရဲ့ အကြံပေးစာ`,
    description: `လမ်းပြောက်နေတဲ့ လူငယ်များအတွက် ဆရာသက်ခိုင်ရဲ့ အကြံပေးစာ`,
    openGraph: {
      title: `လမ်းပြောက်နေတဲ့ လူငယ်များအတွက် ဆရာသက်ခိုင်ရဲ့ အကြံပေးစာ`,
      description: `လမ်းပြောက်နေတဲ့ လူငယ်များအတွက် ဆရာသက်ခိုင်ရဲ့ အကြံပေးစာ`,
      url: "/articles/saya-thet-khine",
      siteName: "Daily topic info",
      images: imageList,
      locale: "en_US",
      type: "website",
    },
    twitter: {
      title,
      description: title,
      images: imageList,
    },
    // icons: iconMetaTags,
    alternates: {
      canonical: "/articles/saya-thet-khine",
    },
  };
}

export default function page() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="py-9 font-bold text-lg">
        လမ်းပြောက်နေတဲ့ လူငယ်များအတွက် ဆရာသက်ခိုင်ရဲ့ အကြံပေး post
      </h1>
      <div>
        <iframe
          src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fthet.khine.587%2Fposts%2F10222738465129784&show_text=true&width=500"
          width="100%"
          height="756"
          style={{
            border: "none",
            overflow: "hidden",
          }}
          scrolling="no"
          frameBorder="0"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>
      </div>
    </div>
  );
}
