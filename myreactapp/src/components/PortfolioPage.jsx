import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const allProjects = [
  {
    id: 1,
    title: "Hair Growth Gummies",
    categories: ["Static Ads"],
    image: "/portfoliopageimages/static1.jpeg",
    type: "image",
    content: "",
    primaryText: `Her dermatologist told her to expect this at 61.

Thinner hair. Less volume. Just accept it as part of getting older.

She did not accept it.

Liza is 61 years old. 

Her hair is long, thick, and so full that people stop her to ask if she is wearing a wig.

She is not.

One SugarbearPRO gummy every morning. That is the only thing she changed.

If you have ever been told your hair loss is just aging, Liza's review is for you.`,
    headline: `She Is 61. People Think It Is A Wig.`,
    description: `For women who refuse to accept hair loss as part of aging.`,
    cta: "Shop Now",
  },
  {
    id: 2,
    title: "Dog Chews",
    categories: ["Static Ads"],
    image: "/portfoliopageimages/static2.jpeg",
    type: "image",
    content: "",
    primaryText: `25,000 dog parents have made a decision you haven't yet.

And almost every single one of them wishes they'd done it sooner. 🐾

Wuffes Hip & Joint Chews are formulated with 1,997mg of active ingredients per chew, clinically studied, advanced strength, and designed specifically for dogs who deserve to stay active longer.

Here's what those 25,000 families found out:

✅ 99% saw improved mobility within 90 days
✅ Recommended by vets 
✅ 95% would recommend to another dog parent

One soft chew a day. A flavor dogs love. Results families trust.

And if it doesn't work for your pup? 

Full refund. No question asked`,
    headline: `25,000 Dog Parents Can't Be Wrong`,
    description: `Vet Recommended. 4.9 stars. 90-day guarantee.`,
    cta: "Order Now",
  },
  { id: 3, title: "Native Ad", categories: ["Static Ads"], image: "/portfoliopageimages/static3.jpeg", type: "image", content: "", 
    primaryText: `If you are over 50 and your hair has been getting thinner, this is the most important thing you will read today.

For years, women were told it was stress. Or hormones. Or just aging.

But researchers are now pointing to something much more specific. A nutritional gap that forms inside the body after 50, quietly starving your hair follicles of the exact compounds they need to grow. And because it happens internally, nothing you put on your hair can fix it.

The women who figured this out are not using expensive treatments or prescription medications. Most of them made one small change to their morning routine and started seeing the difference within weeks.

Tap Learn More to read the full story.`, 
headline: `Why Women Over 50 Are Suddenly Getting Their Hair Back`, 
description: `It has nothing to do with stress, diet, or genetics. Read the full story.`, 
cta: "Learn More" 
},

  { id: 4, title: "Hormonal Balance Supplement", categories: ["Static Ads"], image: "/portfoliopageimages/static4.jpeg", type: "image", content: "", 
    primaryText: `Why juggle multiple supplements when you can simplify it into one?

Babe Balance combines all the necessary ingredients (Magnesium, DIM, Inositol, Ashwagandha, Chaste Berry, Selenium, Chromium, and Black Cohosh)

One formula to stabilize your mood, reduce fatigue, and restore hormonal balance for total well-being.
`, 
    headline: `One Formula. Daily Balance Support.`, 
    description: `Support mood, energy & hormone wellness in one routine.`, 
    cta: "Buy Now" },
  
  { id: 5, title: "Skin Cleanser", categories: ["Static Ads"], image: "/portfoliopageimages/static5.jpeg", type: "image", content: "", 
    primaryText: `No More Acne!! ✨

Say goodbye to stubborn breakouts, redness, and stressed-out skin 👋

Meet the new Spot Cleanser, a breakout-fighting formula designed to deeply cleanse pores and help support clearer-looking skin without stripping away hydration.

✨ Gentle on your skin
 🫧 Deep-cleansing formula
 💧 Hydrating, non-stripping cleanse
 🌿 Designed for breakout-prone skin

Your glass skin era starts here.
`, 
    headline: `The Acne Cleanser Your Skin Will Love`, 
    description: `After just 3 Days, many customers reported noticeable improvements.`, 
    cta: "Order Now" 
  },
  { id: 6, title: "Hair Growth Gummies", categories: ["Static Ads"], image: "/portfoliopageimages/static6.jpeg", type: "image", content: "", 
    primaryText: `If you are tired of watching your hair fall out every time you shower, this is for you.

Here is what changes when you finally give your follicles what they have been missing:

✓ Shedding slows down noticeably within weeks 
✓ Hair feels stronger and less brittle at the root 
✓ Thickness and fullness start coming back 
✓ Less breakage when brushing and washing 
✓ Smoother, healthier hair from root to tip

Unlike shampoos and oils that sit on the surface and never reach the root, SugarbearPRO works from the inside out with 13 total actives, not just biotin.

90% of women who used it saw positive results in 42 days, verified by a USA consumer study.

100-day money-back guarantee.

If it does not work for you, you pay nothing. No questions asked.

Tap below and get yours before stock runs out.
`, 
    headline: `90% saw results in 42 days.`, 
    description: `Verified by the USA consumer study. Try SugarbearPRO risk-free for 100 days.`, 
    cta: "Shop Now" 
  },
  { id: 7, title: "Dog Chews", categories: ["Static Ads"], image: "/portfoliopageimages/static7.jpeg", type: "image", content: "", 
    primaryText: `That tail isn't going to wag forever. 🐾

But it can wag a whole lot longer.

Happy. Comfortable. Still showing up for his favorite human every single day, that's what Wuffes Hip & Joint Chews were made for.

Not just ingredients in a tub. More good days with the dog you love.

And the pet parents who almost scrolled past? 

They're now the ones saying: "I wish I'd started giving him these sooner."

Because 99% of dog families reported improved mobility within 90 days, from just one soft chew a day. 

A flavor dogs go crazy for. A difference families actually feel.

And if it doesn't work for your pup? 90-day money-back guarantee. No questions asked.

There's no reason to keep waiting.

Click below and get yours now. 👇
`, 
    headline: `"I Wish I'd Started This Sooner"`, 
    description: `Risk-free for 90 days.`, 
    cta: "Buy Now" },
  { id: 8, title: "Native Ad", categories: ["Static Ads"], image: "/portfoliopageimages/static8.jpeg", type: "image", content: "", 
    primaryText: `If this is what your shower looks like every morning, keep reading.

Because most women who see this much hair in their drains have been told the same things. 

It is stress. It is hormones. It is just part of getting older. Give it time.

But there is something nobody is telling you about why the shedding actually happens, and more importantly, why it stops for the women who figure out this one thing.

It took one woman three years of trying everything on the market before she found it. Now she says she can always tell when she has not been taking it.

Tap Learn More to read her full story.`, 
    headline: ` If Your Drain Looks Like This Every Morning, Read This`, 
    description: `It is neither stressful nor aging. The real reason is something most women never find out. Read the full story.`, 
    cta: "Learn More" 
  },
  { id: 9, title: "Hair Growth Gummies", categories: ["Static Ads"], image: "/portfoliopageimages/static9.jpeg", type: "image", content: "", 
    primaryText: `You have probably tried something for your hair before, and it did not work.

So have 9,450 women who now will not stop reordering this.

The difference is that SugarbearPRO works from the inside, not the surface. 

One gummy every morning gives your follicles 6000mcg Biotin, MSM, Zinc, Inositol, and 9 more actives that no shampoo, oil, or single biotin pill has ever been able to deliver to them.

Most women notice the shedding slows down first. Then the thickness comes back. Then someone asks what you are doing differently.

Try it for 100 days. If nothing changes, you pay nothing.`, 
    headline: `9,450 Women Can Not All Be Wrong`, 
    description: `Try SugarbearPRO risk-free for 100 days.`, 
    cta: "Order Now" },
  { id: 10, title: "Fragrance", categories: ["Static Ads"], image: "/portfoliopageimages/static10.jpeg", type: "image", content: "", 
    primaryText: `Smell expensive without spending a fortune ✨

Get ALL 3 feminine fragrances for just $33.

Whether you want soft & elegant, sweet & seductive, or fresh & confident, this bundle has a scent for every mood.

💖 Limited stock available. 

Grab yours before the offer ends.`, 
    headline: `3 Luxury Fragrances for ONLY $33`, 
    description: `Limited stock available`, 
    cta: "Get Offer" 
  },
  { id: 11, title: "Skin Cleanser", categories: ["Static Ads"], image: "/portfoliopageimages/static11.jpeg", type: "image", content: "", 
    primaryText: `14 DAYS TRANSFORMATION ✨

Sarah went from painful-looking breakouts and redness… to visibly calmer, clearer-looking skin in just 14 days using The Breakout Hack Spot Cleanser.

Now’s your turn 👇`, 
    headline: `The 14-Day Skin Transformation Everyone’s Talking About`, 
    description: `⭐⭐⭐⭐⭐ 569+ Happy Customers`, 
    cta: "Order Now" 
  },
  { id: 12, title: "Hair Growth Gummies", categories: ["Static Ads"], image: "/portfoliopageimages/static12.jpeg", type: "image", content: "", 
    primaryText: `For $1 a day you can stop the shedding, grow thicker, fuller hair, and finally feel confident about your hair again.

That is exactly what the SugarbearPRO 3 Month Bundle gives you. Three full months of SmartRoot Complex and 6000mcg Biotin, plus a FREE hair brush, all for $90.

This is your chance to be one of them, for just $1 a day.

Grab yours before the stock runs out.`, 
    headline: `For Just $1 A Day`, 
    description: `3 Month Supply + FREE Hair Brush. Stock is running out fast.`, 
    cta: "Get Offer" 
  },
  { id: 13, title: "Native Ad", categories: ["Static Ads"], image: "/portfoliopageimages/static13.jpeg", type: "image", content: "", 
    primaryText: `Nobody expects to be losing their hair at 24.

But it is happening to more young women than anyone talks about. And the reason is almost never what they think it is.

And NO, it is not stress, shampoo, or genetics.

For most young women experiencing this, it comes down to something happening inside the body that nobody ever checks for until the hair loss is already visible. 

By that point, according to researchers, you have already lost far more than you realize.

She figured it out. And what she found took her less than two minutes every morning to fix.

Tap Learn More to read her full story.`, 
    headline: `She Was 24 And Losing Her Hair. This Is What Nobody Told Her.`, 
    description: `It was not stress or genetics. The real reason shocked her. Read the full story.`, 
    cta: "Learn more" 
  },

  { id: 14, title: "Hormonal Balance Supplement", categories: ["Static Ads"], image: "/portfoliopageimages/static14.jpeg", type: "image", content: "", 
    primaryText: `A simple daily routine designed to support balance.

Babe Balance combines clinically studied ingredients (Magnesium, DIM, Inositol, Ashwagandha, Chaste Berry, Selenium, Chromium, and Black Cohosh) to stabilize your mood, reduce fatigue, and restore hormonal balance for total well-being.`, 
    headline: `Just 3 Capsules For Your Hormonal Balance`, 
    description: `Support mood, calm, energy & hormone wellness.`, 
    cta: "Buy Now" 
  },
  { id: 15, title: "Hair Growth Gummies", categories: ["Static Ads"], image: "/portfoliopageimages/static15.jpeg", type: "image", content: "", 
    primaryText: `If your ponytail has been getting thinner and you have tried everything without seeing real results, keep reading.

Because what you are looking at is the same woman, 30 days apart, and the only thing she changed was adding one SugarbearPRO gummy to her morning routine.

Here is why it worked when everything else did not. 

Most things you put on your hair never actually reach the follicle. They sit on the surface while the real problem is happening deep underneath. 

SugarbearPRO goes inside, delivering 6000mcg Biotin, MSM, Zinc, Inositol, and 9 more actives directly where your hair actually grows from.

That is the difference you are seeing between Day 1 and Day 30.

9,450 women have already done this. 4.9 stars. And you have 100 days to try it completely risk-free. If nothing changes, you pay nothing.
`, 
    headline: `This could be you 30 days from now`, 
    description: `Try risk-free for 100 days.`, 
    cta: "Order Now" 
  },
  { id: 16, title: "Hair Growth Gummies", categories: ["Static Ads"], image: "/portfoliopageimages/static16.jpeg", type: "image", content: "", 
    primaryText: `Bad news. Our 50% OFF sale is coming to an end, and stock is running out faster than we expected.

If you are looking to stop excessive shedding, grow thicker, fuller hair, and finally feel confident about your hair again, pay attention.

SugarbearPRO gives your hair exactly what it needs from the inside out.

Stronger roots.
Less breakage.
Visibly fuller hair.
In as little as 30 days.

This is your last chance to claim SugarbearPRO at 50% OFF.

Once stock is gone, the regular price is back.`, 
    headline: `Last Chance — 50% Off Ends Soon`, 
    description: `⭐⭐⭐⭐⭐ (4,9/5)`, 
    cta: "Shop Now" 
  },
  { id: 17, title: "Native Ad", categories: ["Static Ads"], image: "/portfoliopageimages/static17.jpeg", type: "image", content: "", 
    primaryText: `She had tried everything on that counter.

The rosemary oil. The biotin pills. The scalp serum. The Olaplex. The hair masks. The droppers she could never remember to use consistently.

None of it touched the real problem. 

Because the real problem was at the follicle level, where none of those products could ever reach.

One blue gummy changed that. And the full story of how…

Tap Learn More to read what she found out.`, 
  headline: `She Replaced Her Entire Hair Routine With This, And It Worked`, 
  description: `Read the full story.`, 
  cta: "Learn More" },
  { id: 18, title: "Hair Growth Gummies", categories: ["Static Ads"], image: "/portfoliopageimages/static18.jpeg", type: "image", content: "", 
    primaryText: `“I wish I had started sooner” - Leanne

Most women who try SugarbearPRO say the exact same thing. Because the shedding they lived with for years stopped within weeks.

The hair they thought was gone started coming back. And they wished they had not waited so long.

You have 100 days to find out what it does for your hair. If nothing changes, you pay nothing. That is how confident we are.

50,000 women have already made the decision.

Today is your turn.`, 
    headline: `100 Days Risk-Free. No Results, No Charge.`, 
    description: `50,000+ happy women.`, 
    cta: "Order Now" },
  { id: 19, title: "Hair Growth Gummies", categories: ["Static Ads"], image: "/portfoliopageimages/static19.jpeg", type: "image", content: "", 
    primaryText: `You know that version of you.

The one who never thought twice about her hair.

Who wore it down without checking the mirror 3 times.

Who let people take photos without worrying about the angle.

She did not disappear. She is just waiting for the right thing.

SugarbearPRO works from the inside out, feeding your hair follicles the 13 nutrients they have been missing. 

Less shedding. Stronger roots. Thicker hair. Starting in as little as 4 weeks.

Not a shampoo. Not an oil. Not another complex routine to apply and hope it sticks.

All you need is one gummy every morning.

It tastes like candy, so you will never miss a day.

100-day money-back guarantee. If she does not start coming back, you pay nothing.`, 
    headline: `She Is Still In There. Bring Her Back.`, 
    description: `90% of women start to see results in the first 4 weeks`, 
    cta: "Order Now" 
  },
  { id: 20, title: "Hair Growth Gummies", categories: ["Static Ads"], image: "/portfoliopageimages/static20.jpeg", type: "image", content: "", 
    primaryText: `“I will take it every day for the rest of my life!” - Ashley B.

Ashley found something that stopped the shedding, gave her thicker, fuller hair, and became the one thing in her routine she will never give up.

9,450 women feel exactly the same way.

One vegan gummy every morning. Tastes like candy. Works from the inside out with SmartRoot Complex and 6000mcg Biotin.

Try it risk-free for 100 days. If it does not change your hair, you pay nothing.`,
    headline: `The Hair Vitamin Women Refuse To Give Up`, 
    description: `9,450 verified reviews. 100-day money-back guarantee. See why women take it for life.`, 
    cta: "Shop Now" },
  
  
  
  
  { id: 21, title: "Hair Growth Gummies", categories: ["Video Ad Scripts"], image: "/portfoliopageimages/vsl1.jpeg", type: "pdf", fileUrl: "/pdfs/VSL1.pdf" },
  { id: 22, title: "LED Face Mask", categories: ["Video Ad Scripts"], image: "/portfoliopageimages/vsl2.jpeg", type: "pdf", fileUrl: "/pdfs/VSL2.pdf" },
  { id: 23, title: "Beard Growth Kit", categories: ["Video Ad Scripts"], image: "/portfoliopageimages/vsl3.jpeg", type: "pdf", fileUrl: "/pdfs/VSL3.pdf" },
  { id: 24, title: "Hair Growth Gummies", categories: ["Video Ad Scripts"], image: "/portfoliopageimages/vsl4.jpeg", type: "pdf", fileUrl: "/pdfs/VSL4.pdf" },
  { id: 25, title: "LED Face Mask", categories: ["Video Ad Scripts"], image: "/portfoliopageimages/vsl5.jpeg", type: "pdf", fileUrl: "/pdfs/VSL5.pdf" },
  { id: 26, title: "Beard Growth Kit", categories: ["Video Ad Scripts"], image: "/portfoliopageimages/vsl6.jpeg", type: "pdf", fileUrl: "/pdfs/VSL6.pdf" },
  { id: 27, title: "Hair Growth Gummies", categories: ["Video Ad Scripts"], image: "/portfoliopageimages/vsl7.jpeg", type: "pdf", fileUrl: "/pdfs/VSL7.pdf" },
  { id: 28, title: "LED Face Mask", categories: ["Video Ad Scripts"], image: "/portfoliopageimages/vsl8.jpeg", type: "pdf", fileUrl: "/pdfs/VSL8.pdf" },
  { id: 29, title: "Beard Growth Kit", categories: ["Video Ad Scripts"], image: "/portfoliopageimages/vsl9.jpeg", type: "pdf", fileUrl: "/pdfs/VSL9.pdf" },
  { id: 30, title: "Hair Growth Gummies", categories: ["Video Ad Scripts"], image: "/portfoliopageimages/vsl10.jpeg", type: "pdf", fileUrl: "/pdfs/VSL10.pdf" },
  
  
  { id: 31, title: "Hair Growth Gummies", categories: ["Video Ads"], image: "/portfoliopageimages/video1.jpeg", type: "video", content: "video1.mp4" },
  { id: 32, title: "Protein Drink", categories: ["Video Ads"], image: "/portfoliopageimages/video2.jpeg", type: "video", content: "video2.mp4" },
  { id: 33, title: "Fashion", categories: ["Video Ads"], image: "/portfoliopageimages/video3.jpeg", type: "video", content: "video3.mp4" },
  { id: 34, title: "Fashion", categories: ["Video Ads"], image: "/portfoliopageimages/video4.jpeg", type: "video", content: "video4.mp4" },
  { id: 35, title: "Hair Growth Gummies", categories: ["Video Ads"], image: "/portfoliopageimages/video5.jpeg", type: "video", content: "video5.mp4" },
  { id: 36, title: "Fashion", categories: ["Video Ads"], image: "/portfoliopageimages/video6.jpeg", type: "video", content: "video6.mp4" },
  { id: 37, title: "Hair Growth Gummies", categories: ["Video Ads"], image: "/portfoliopageimages/video7.jpeg", type: "video", content: "video7.mp4" },
  { id: 38, title: "Hair Growth Gummies", categories: ["Video Ads"], image: "/portfoliopageimages/video8.jpeg", type: "video", content: "video8.mp4" },
  { id: 39, title: "Hair Growth Gummies", categories: ["Video Ads"], image: "/portfoliopageimages/video9.jpeg", type: "video", content: "video9.mp4" },
  { id: 40, title: "Protein Drink", categories: ["Video Ads"], image: "/portfoliopageimages/video10.jpeg", type: "video", content: "video10.mp4" },
  { id: 41, title: "Hair Growth Gummies", categories: ["Video Ads"], image: "/portfoliopageimages/video11.jpeg", type: "video", content: "video11.mp4" },
  { id: 42, title: "Respiratory Muscle Training", categories: ["Video Ads"], image: "/portfoliopageimages/video12.jpeg", type: "video", content: "video12.mp4" },
  { id: 43, title: "Treadmill", categories: ["Video Ads"], image: "/portfoliopageimages/video13.jpeg", type: "video", content: "video13.mp4" },
  
  
  { id: 44, title: "Supplement", categories: ["Google Ads"], image: "/portfoliopageimages/googleads.jpeg", type: "pdf", fileUrl: "/pdfs/Google_Ads.pdf" },
  { id: 45, title: "Supplement", categories: ["YouTube Ads"], image: "/portfoliopageimages/youtubeads.jpeg", type: "pdf", fileUrl: "/pdfs/YouTube_Ads.pdf" },

  { id: 46, title: "Supplement", categories: ["Advertorial"], image: "/portfoliopageimages/advertorial1.jpeg", type: "pdf", fileUrl: "/pdfs/advertorial1.pdf"},
  { id: 47, title: "Orthopedic Shoes", categories: ["Listicle"], image: "/portfoliopageimages/listicle1.jpeg", type: "pdf", fileUrl: "/pdfs/listicle1.pdf"},

];

const categories = ["All", "Static Ads", "Video Ad Scripts", "Video Ads", "Google Ads", "YouTube Ads", "Advertorial", "Listicle"];

function StaticAdModal({ project, onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content static-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>&times;</button>

        <div className="static-modal-inner">
          <div className="static-modal-image-col">
            <img src={project.image} alt={project.title} className="static-modal-image" />
          </div>

          <div className="static-modal-copy-col">
            <div className="static-modal-copy-header">
              <span className="static-modal-category">Static Ad</span>
              <h2 className="static-modal-title">{project.title}</h2>
            </div>

            <div className="static-modal-copy-body">
              <div className="ad-copy-block">
                <span className="ad-copy-label">PRIMARY TEXT</span>
                <p className="ad-copy-text">{project.primaryText}</p>
              </div>

              <div className="ad-copy-divider" />

              <div className="ad-copy-block">
                <span className="ad-copy-label">HEADLINE</span>
                <p className="ad-copy-text">{project.headline}</p>
              </div>

              <div className="ad-copy-divider" />

              <div className="ad-copy-block">
                <span className="ad-copy-label">DESCRIPTION</span>
                <p className="ad-copy-text">{project.description}</p>
              </div>

              <div className="ad-copy-divider" />

              <div className="ad-copy-block ad-copy-cta-block">
                <span className="ad-copy-label">CTA</span>
                <span className="ad-copy-cta-value">{project.cta}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectModal({ project, onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>&times;</button>
        <h2>{project.title}</h2>
        <div className="modal-body">
          {project.type === "video" && (
            <video
              controls
              autoPlay
              loop
              playsInline
              className="modal-media"
              src={`/videos/${project.content}`}
            />
          )}
          {project.type === "image" && (
            <img src={project.image} alt={project.title} className="modal-media" />
          )}
        </div>
      </div>
    </div>
  );
}

export default function PortfolioPage() {
  const [active, setActive] = useState("All");
  const [selected, setSelected] = useState(null);

  const [shuffled] = useState(() => [...allProjects].sort(() => Math.random() - 0.5));

  const filtered = active === "All"
    ? shuffled
    : allProjects.filter(p => p.categories.includes(active));


  const handleCardClick = (proj) => {
    if (proj.type === "pdf") {
      if (proj.fileUrl) window.open(proj.fileUrl, "_blank");
      return;
    }
    setSelected(proj);
  };

  const handleClose = () => setSelected(null);

  const isStaticAd = selected && selected.categories.includes("Static Ads");

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selected) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [selected]);

  return (
    <section className="portfolio-page-section">
      <header className="portfolio-page-header">
        <h2 className="section-headline">Work Archive</h2>
        <div className="portfolio-filter-nav">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={active === c ? "active" : ""}
            >
              {c}
              {active === c && (
                <motion.div className="nav-indicator" layoutId="activeTab" />
              )}
            </button>
          ))}
        </div>
      </header>

      <div className="portfolio-page-grid-wrapper">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="portfolio-page-grid"
          >
            {filtered.length > 0 ? (
              filtered.map(proj => (
                <div
                  key={proj.id}
                  className="portfolio-page-card"
                  onClick={() => handleCardClick(proj)}
                >
                  <div className="portfolio-page-media">
                    <img src={proj.image} alt={proj.title} />
                  </div>
                  <div className="portfolio-page-info">
                    <span>{proj.categories[0]}</span>
                    <h3>{proj.title}</h3>
                  </div>
                </div>
              ))
            ) : (
              <div className="no-projects-message">No projects found.</div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {selected && isStaticAd && (
        <StaticAdModal project={selected} onClose={handleClose} />
      )}
      {selected && !isStaticAd && (
        <ProjectModal project={selected} onClose={handleClose} />
      )}
    </section>
  );
}