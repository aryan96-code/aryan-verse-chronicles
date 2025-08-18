export interface Poem {
  id: string;
  title: string;
  category: 'hindi' | 'english' | 'shayari';
  preview: string;
  fullText: string;
  theme: {
    gradient: string;
    accentColor: string;
    textColor: string;
    bgPattern?: string;
    patternPosition?: string;
  };
  featured?: boolean;
}

export const poems: Poem[] = [
  {
    id: "rebellion-healing",
    title: "Rebellion & Healing",
    category: "english",
    featured: true,
    preview: `Tell the preachers to shatter their glass,
Tell the healers to taste their own herbs.
I traded in teeth and got paid in steel,
And there's psalms in the fractures I didn't feel clean.`,
    fullText: `Tell the preachers to shatter their glass,
Tell the healers to taste their own herbs.
I traded in teeth and got paid in steel,
And there's psalms in the fractures I didn't feel clean.

The congregation holds its breath
While I count scars like rosary beads,
Each mark a prayer I never learned to say,
Each wound a hymn that bleeds in silence.

They speak of mercy like it's currency,
But I've been paying in broken promises,
Collecting debts from angels who forgot my name,
Building altars from the bones of my mistakes.

Let them preach salvation to empty pews,
I'll find my healing in the spaces between words,
In the quiet rebellion of choosing to stay
When every sermon tells me to repent.`,
    theme: {
      gradient: "from-slate-900 via-purple-900 to-slate-900",
      accentColor: "#c084fc",
      textColor: "#f0e7fe",
      bgPattern: "radial-gradient(circle at 20% 30%, rgba(192, 132, 252, 0.15) 0%, transparent 45%)",
      patternPosition: "top left"
    }
  },
  {
    id: "self-discovery",
    title: "Self-Discovery",
    category: "shayari",
    preview: `Jo milne waala nahi, uska intezaar kya karun?
Har mod pe bas khamoshiyaan ho, toh izhaar kya karun?
Chaand to taaron se ghira hua hai sada se,`,
    fullText: `Jo milne waala nahi, uska intezaar kya karun?
Har mod pe bas khamoshiyaan ho, toh izhaar kya karun?
Chaand to taaron se ghira hua hai sada se,
Main akela hun, apne khawabon ka sahara kya karun?

Raat ke andhere mein chhupe hue sitare,
Mujhse keh rahe hain ki umang bhara kya karun?
Toote hue rishtey ki yaadein le kar,
In bikhre hue tukdon ka sahara kya karun?

Zindagi ki raah mein chalne ka junoon hai,
Lekin manzil ka pata na ho, toh guzara kya karun?
Mohabbat ka naam sunkar dil machalta hai,
Par jo mere saath nahi, uska pyaar kya karun?

Khud se hi baat karta hun roz raat ko,
Kyunki doosron se jo keh na sakun, woh raaz kya karun?`,
    theme: {
       gradient: "from-rose-900 via-pink-800 to-purple-900",
      accentColor: "#f43f5e",
      textColor: "#fdf2f8",
      bgPattern: "linear-gradient(45deg, rgba(244, 63, 94, 0.1) 25%, transparent 25%, transparent 75%, rgba(244, 63, 94, 0.1) 75%)"
    }
  },
  {
    id: "longing-loss",
    title: "Longing & Loss",
    category: "hindi",
    preview: `"Jab Main Nahi Rahunga..." 

Kya tab bhi aaogi tum mujhse milne?
Usi chehre ko choone, jise dekhkar
Tumne kaha tha -
"Ab yeh nazara bhi beimaan lagta hai..."`,
    fullText: `"Jab Main Nahi Rahunga..."

Kya tab bhi aaogi tum mujhse milne?
Usi chehre ko choone, jise dekhkar
Tumne kaha tha -
"Ab yeh nazara bhi beimaan lagta hai..."

Kya tab bhi sunogi tum meri awaaz?
Wahi purani shayari, jo maine tumhare liye likhi thi,
Jise padh kar tumne kaha tha -
"Lagta hai tumne mera dil chura liya hai..."

Main soch raha hun, agar main nahi rahunga,
Toh kya tum bhool jaaogi mere saath ke woh pal?
Woh hasna, woh rone ka bahana,
Woh chupke-chupke haath pakadna...

Ya phir yaad karogi mujhe,
Jaise main tumhe yaad karta hun rozana?
Kya tab bhi lagega tumhe ki main kahin paas hun,
Jaise mujhe lagta hai ki tum hamesha mere saath ho?

Agar main nahi rahunga,
Toh please, mujhe bhool mat jaana...`,
    theme: {
      gradient: "from-indigo-900 via-sky-800 to-blue-900",
      accentColor: "#60a5fa",
      textColor: "#dbeafe",
      bgPattern: "repeating-linear-gradient(30deg, transparent, transparent 2px, rgba(96, 165, 250, 0.08) 2px, rgba(96, 165, 250, 0.08) 4px)",
      patternPosition: "top right"
    }
  },
  {
    id: "silence-absence",
    title: "Silence & Absence",
    category: "english",
    preview: `Thought her silence was calm,   
till stillness started humming her voice,   
and learned no sound cuts deeper than gone.`,
    fullText: `Thought her silence was calm,
till stillness started humming her voice,
and learned no sound cuts deeper than gone.

The echo of her laughter
haunts every empty room,
while I practice conversations
with shadows that smell like her perfume.

She left fingerprints on silence,
taught quiet how to scream,
now every peaceful moment
is another broken dream.

I thought I knew the weight of words
until I felt their absence,
how heavy nothing becomes
when wrapped in her presence.

The space she occupied
now breathes with phantom pain,
and I've learned that emptiness
is just love with a different name.`,
    theme: {
      gradient: "from-slate-800 via-gray-800 to-zinc-900",
      accentColor: "#a1a1aa",
      textColor: "#f4f4f5",
      bgPattern: "radial-gradient(ellipse at 80% 20%, rgba(161, 161, 170, 0.1) 0%, transparent 70%)",
      patternPosition: "bottom left"
    }
  },
  {
    id: "midnight-thoughts",
    title: "Midnight Thoughts",
    category: "english",
    preview: `The clock strikes twelve and here I am again,
Wrestling with thoughts that refuse to sleep,
While the world dreams in colors I can't name.`,
    fullText: `The clock strikes twelve and here I am again,
Wrestling with thoughts that refuse to sleep,
While the world dreams in colors I can't name.

These midnight hours hold a different truth,
Raw and unfiltered, without daylight's mask,
Where honesty bleeds through cracked defenses.

I trace the outline of my fears
Against the canvas of darkness,
Each shadow a story I'm afraid to tell.

The night understands what dawn never will—
That some conversations happen only in whispers,
Some tears fall only when no one's watching.

In these sacred hours between days,
I meet the person I truly am,
Stripped of pretense, clothed in vulnerability.

The darkness doesn't judge,
It simply holds space
For all the things I cannot say in light.`,
    theme: {
      gradient: "from-violet-900 via-purple-800 to-indigo-900",
      accentColor: "#a78bfa",
      textColor: "#ede9fe",
      bgPattern: "conic-gradient(from 230deg at 30% 65%, rgba(167, 139, 250, 0.12) 0deg, transparent 60deg, rgba(167, 139, 250, 0.08) 120deg, transparent 180deg)",
      patternPosition: "center"
    }
  },
  {
    id: "dil-ki-baat",
    title: "Dil Ki Baat",
    category: "shayari",
    preview: `Dil ki baat keh dun ya chhupa lun main,
Teri mohabbat mein doob jaun ya uth jaun main.
Har lamha tera intezaar karta hun,`,
    fullText: `Dil ki baat keh dun ya chhupa lun main,
Teri mohabbat mein doob jaun ya uth jaun main.
Har lamha tera intezaar karta hun,
Par kya pata tera pyaar paun ya kho dun main.

Raat ke andhere mein tera chehra yaad aata hai,
Dil kehta hai ki bas tujhe hi chaahun main.
Tere bina ye zindagi adhuri si lagti hai,
Kaise kahun ki tere bina mar jaun main.

Teri aankhon mein chhupi hai jo mohabbat,
Usko padhne ki koshish karta hun main.
Kabhi lagta hai tu bhi mujhse pyaar karti hai,
Kabhi lagta hai ki khwaabon mein hi dekh paun main.

Jo ishq hai tera, wo meri rooh mein basa hai,
Har saans mein tera naam bulata hun main.
Agar yahi hai zindagi, toh yun hi jeeta hun,
Teri mohabbat mein hi khush rehta hun main.`,
    theme: {
      gradient: "from-amber-800 via-orange-800 to-rose-900",
      accentColor: "#fb923c",
      textColor: "#fffbeb",
      bgPattern: "linear-gradient(125deg, transparent 65%, rgba(251, 146, 60, 0.15) 65%, rgba(251, 146, 60, 0.15) 70%, transparent 70%)",
      patternPosition: "bottom right"
    }
  }
];

export const getFeaturedPoem = () => poems.find(poem => poem.featured) || poems[0];
export const getPoemsByCategory = (category: string) => 
  category === 'all' ? poems : poems.filter(poem => poem.category === category);
export const getPoemById = (id: string) => poems.find(poem => poem.id === id);
