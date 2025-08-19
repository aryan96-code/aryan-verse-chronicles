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
  id: "wo chali gayi, to kya hua?", 
  title: "wo chali gayi, to kya hua?",
  category:"shayari",
  preview:`wo chali gayi, to kya hua?
main zinda hoon, par ye swaal rah gya..`,
  fullText:`wo chali gayi, to kya hua?
main zinda hoon, par ye swaal rah gya..

jab laut ke ayegii wo,
to milunga use-magar dhalti shaam ki Tarah,
khoya hua sa, bikhra hua saa...

mere kamre me ab sirf kitabein haii,
aur khwabon ke siwa kuch nahii, 
wo jab ayegi to paayegii-
main hoon, magar sirf dikhawe ke liye.

zindagi to chlti rhegii,
magar ab wo meri nahi,
bas ek saya hoga waqt ka,
jo uske saamne jhuthi muskan liye khada hoga...`, 
  theme: {
    gradient: "from-purple-900 via-blue-800 to-indigo-900", // tailwind gradient
    accentColor: "#8b5cf6", // hex color for accents
    textColor: "#e0e7ff", // hex color for text
    bgPattern: "radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.15) 0%, transparent 50%)", 
    patternPosition: "center" 
  }
},
{
  id: "marne ke baad bhi tmhara hoon", 
  title: "marne ke baad bhi tmhara hoon",
  category: "hindi", 
  preview: `kal jisne kaha tha "tmse  nafrat hai"
aaj wahi mere kafan par gulab rakh gaii...
kya dekhni aai thii...`, 
  fullText: `kal jisne kaha tha "tmse  nafrat hai"
aaj wahi mere kafan par gulab rakh gaii...
kya dekhni aai thii...
ki meri chuppi me koi jawab to nahi?

usne chhua mera haath-
jaise dar rhi ho ki achanak pakad na lun,
maine socha tha markar bhi nhi milunga,
par ye kya -
wo mere laash se maafi maang rahi thii...

uski aankho me wahi sawaal tha - 
"tumhe galat samjha kya main?"
magar ab to mere hoth sile hue the,
sayad wo sun paati agar taharti ak pal aur..

wo royi nahi , bas usne 
meri dayri ka wo panna faara,
jahan maine likha tha-
"marne ke baad bhi tmhara hoon.."

ab wo har shaam meri kabr par
akhbar ka wo tukda rkh jaati hai,
jisme likha hai-
"adhure pyaar ki laash mili.."`,
  theme: {
    gradient: "from-purple-900 via-blue-800 to-indigo-900", // tailwind gradient
    accentColor: "#8b5cf6", // hex color for accents
    textColor: "#e0e7ff", // hex color for text
    bgPattern: "radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.15) 0%, transparent 50%)", // optional background pattern
    patternPosition: "bottom left" // optional: "top left", "bottom right", etc.
  }
},
{
  id: " मैं तेरी यादों की रेत में धीरे-धीरे राख हो रहा हूँ...  ", 
  title: "मैं तेरी यादों की रेत में धीरे-धीरे राख हो रहा हूँ...",
  category: "shayari",
  preview: `मैं तेरी यादों की रेत में धीरे-धीरे राख हो रहा हूँ...  
 तू हवा बन के बिखेर दे या फिर मिट्टी बन के छुपा ले,`,  
  fullText: `"मैं तेरी यादों की रेत में धीरे-धीरे राख हो रहा हूँ...  
> तू हवा बन के बिखेर दे या फिर मिट्टी बन के छुपा ले,  
> पर इतना कर कि कोई पूछे भी तो कह सकूँ —  
> 'वो मेरा नहीं था, मगर मैं उसकी थी... ये बात अब तक दिल में है तो है।'"`, 
  theme: {
    gradient: "from-purple-900 via-blue-800 to-indigo-900", // tailwind gradient
    accentColor: "#8b5cf6", // hex color for accents
    textColor: "#e0e7ff", // hex color for text
    bgPattern: "radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.15) 0%, transparent 50%)", // optional background pattern
    patternPosition: "center" // optional: "top left", "bottom right", etc.
  }
},
{
  id: "Tere Bin Jeete Hue Bhi Hum Marr Gaye",  
  title: "Tere Bin Jeete Hue Bhi Hum Marr Gaye",
  category: "hindi",  
  preview: `Tere bin jeete hue bhi hum marr gaye,
Kho diya apna aap, sab kuch haar gaye,
Ham tumhare kya hue, bas sawaal reh gaye,`, 
  fullText: `Tere bin jeete hue bhi hum marr gaye,
Kho diya apna aap, sab kuch haar gaye,
Ham tumhare kya hue, bas sawaal reh gaye,
Hum wahin hain, par kahin ke nahin rahe.

Teri saanson ki hawa bhi ek nasha thi,
Teri aankhon mein ek alag hi duniya thi,
Hum wahi kho gaye jahan teri ek nazar thi,
Ab har jagah wahi khaalipan, wahi tanhai hai.

Tera hona hi kuch aur tha, ek ehsaas tha,
Tera chhod jaana ek aisa zakhm hai,
Hum woi mombatti hai jo hawa se pehle hi,
Bujh gaye... bin tere hi raakh ho gaye.

Ham tumhare kya hue, bas sawaal hi reh gaye,
Khud se bhi aaj anjaan hai, tumse bhi begane hai,
Woh jism bhi ab bojh hai, woh dil bhi ab pathhar hai,
Hum wahin hain, par hum kahin ke nahin rahe.

Ham hasrat hi rehte to kam se kam tum,
Hamaare khwabon mein to zinda rehte...
Ab to khwab bhi toot kar bikhar gaye hain,
Aur hum... hum bas ek aah banke reh gaye hain`, // full poem content
  theme: {
    gradient: "from-purple-900 via-blue-800 to-indigo-900", // tailwind gradient
    accentColor: "#8b5cf6", // hex color for accents
    textColor: "#e0e7ff", // hex color for text
    bgPattern: "radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.15) 0%, transparent 50%)", // optional background pattern
    patternPosition: "center" // optional: "top left", "bottom right", etc.
  }
},
{
  id: "Tere Nishaan",  
  title: "Tere Nishaan",
  category: "shayari", 
  featured: true,
  preview: `Tere jaane ke baad bhi,  
Mere kamre ki hawa ne seekh li hai -  
Tere perfume ki tarah thaerna`, 
  fullText: `Tere jaane ke baad bhi,  
Mere kamre ki hawa ne seekh li hai -  
Tere perfume ki tarah thaerna.

Woh gift-bags abhi bhi khali nahi hote,  
Unmein se nikalti hai teri aawaz -  
"Ye to rakh lo, meri yaad ban jayega..."  

Aur woh tissue...  
Jis par tune lipstick chhod di thi,  
Ab woh mere honton ka hissa hai,  
Har gam ko chup-chap ponchta hua.  

Main abhi bhi pehanta hoon woh shirt,  
Jismein tum kehti thi -  
"Dekho, mera rang chadh gaya tum par!"  
Par ab woh rang feeka padta hai,  
Har dhulai mein tumhari yaad ke saath.  

Aur haan...  
Main abhi bhi chaand se baatein karta hoon,  
Kyuki woh bhi tumhari tarah  
Meri baat sunkar chup rehta hai.  

Shaam dhalte hi sooraj doobne lagta hai,  
Aur main sochta hoon -  
Kya tum bhi kahin  
Isi andhere ko gin rahi ho?`, 
  theme: {
    gradient: "from-purple-900 via-blue-800 to-indigo-900", // tailwind gradient
    accentColor: "#8b5cf6", // hex color for accents
    textColor: "#e0e7ff", // hex color for text
    bgPattern: "radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.15) 0%, transparent 50%)", // optional background pattern
    patternPosition: "center" // optional: "top left", "bottom right", etc.
  }
},
{
  id: 'tere-saath-har-barbadi-bhi-dua-lagti-hai',  
  title: 'तेरे साथ हर बर्बादी भी — "दुआ" लगती है',
  category: "hindi",  
  preview: `लोग रोकते हैं...
"रुक जा! ये राह अंधेरी है,
इश्क़ तेरा तुझे निगल जाएगा,`,  
  fullText: `लोग रोकते हैं...
"रुक जा! ये राह अंधेरी है,
इश्क़ तेरा तुझे निगल जाएगा,
दुनिया तुझे बर्बाद कर जाएगी!"

उनकी बातों से डरता तो नहीं,
पर कभी-कभी सोचता हूँ —
"क्या वाकई… मेरे सारे सपने,
मेरी पहचान, मेरी खुशियाँ—
सब कुछ खो जाएगा, बस उस एक चेहरे के लिए?"

फिर भी…
जब तेरी याद आती है,
दिल की हर धड़कन कहती है —
"अगर उसकी मुस्कान मिल जाए,
तो बर्बाद हो जाएँ सारे दिन!
अगर उसकी आवाज़ सुनाई दे,
तो मिट जाए मेरी हर कहानी!"

और अगर…
वो दिन आ भी जाए,
जब तूने मुझे अपनाया,
मेरी आँखों में देखा,
और मेरा हाथ थाम लिया —

तो फिर चाहे…
आसमान टूट पड़े,
या ज़मीन साथ छोड़ दे,
रिश्ते बिखर जाएँ,
आँखों में आँसुओं का समंदर हो —

लेकिन देख!
मेरे होंठों पर एक मुस्कान होगी,
मेरी रूह को सुकून मिलेगा —
क्योंकि जब तू मिला,
तो ये सारी "बर्बादी" ही,
मुझे खुद से मिला गई।

हाँ…
बर्बाद हुआ मैं, तेरे इश्क़ में,
जली मेरी दुनिया, पर यादें रौशन रहीं।
हर दर्द अब गीत लगता है,
हर आँसू अब साज़ लगता है।

क्योंकि तू है मेरे साथ,
तो ज़िंदगी का हर ज़ख्म,
तेरी मोहब्बत का इनाम लगता है।

बस इतना कहना है…
तेरे प्यार की सज़ा हो या परीक्षा,
मैं खुदा से भी लड़ जाऊँगा,
हर ग़म को सीने से लगा लूँगा,
क्योंकि तू जो मिल गया…
तो हर खोई चीज़ भी,
तेरा एहसास बन गई।
तेरे बिना जीना सज़ा थी…
तेरे साथ हर बर्बादी भी — "दुआ" लगती है।`,  
  theme: {
    gradient: "from-purple-900 via-blue-800 to-indigo-900", // tailwind gradient
    accentColor: "#8b5cf6", // hex color for accents
    textColor: "#e0e7ff", // hex color for text
    bgPattern: "radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.15) 0%, transparent 50%)", // optional background pattern
    patternPosition: "middle left" 
  }
}, 
{
  id: "तेरे जाने के बाद",  
  title: "तेरे जाने के बाद",
  category: "hindi", 
  preview: `ये जो दिल के टुकड़े होते हैं रोज़,  
ये जो साँसों में काँटे चुभते हैं,  
मैं सब सह लूँ... पर तुझे भूल जाने का`,  
  fullText: `ये जो दिल के टुकड़े होते हैं रोज़,  
ये जो साँसों में काँटे चुभते हैं,  
मैं सब सह लूँ... पर तुझे भूल जाने का,  
वो ख़ालीपन, वो सूनापन,  
उससे तो ये ज़ख़्म जन्नत लगते हैं।  
तेरा नाम आता है तो रूह काँप जाती है,  
यादों के ग़म से जिस्म थक जाता है,  
पर जिस रात तू सपनों में नहीं आती,  
वो रात...  
मौत से भी लम्बी जाती है।  
क्यों निभाऊँ मैं ये अधूरा सफ़र तेरा?  
क्यों बनूँ मैं तेरे पैरों की धूल?  
क्योंकि तेरे बिना जो शाम ढलेगी,  
वो सूरज डूबने से पहले ही,  
अँधेरा बन के टूट जाएगी।  
हो सकता है ये प्यार ज़हर हो तेरा,  
हो सकता है मैं बस एक स्याही का धब्बा,  
पर तू है तो दर्द भी रौशनी लगता है,  
और तेरे जाने के बाद की सुबह...  
बस एक सन्नाटा लगता है।`,
  theme: {
    gradient: "from-purple-900 via-blue-800 to-indigo-900", // tailwind gradient
    accentColor: "#8b5cf6", // hex color for accents
    textColor: "#e0e7ff", // hex color for text
    bgPattern: "radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.15) 0%, transparent 50%)", // optional background pattern
    patternPosition: "bottom left" 
  }
},
{
  id: "ये जो दिल के टुकड़े होते हैं रोज़", 
  title: "ये जो दिल के टुकड़े होते हैं रोज़",
  category: "hindi", 
  featured: true, 
  preview: `ये जो दिल के टुकड़े होते हैं रोज़,  
ये जो साँसों में काँटे चुभते हैं,  
मैं सब सह लूँ... पर तुझे भूल जाने का,`,
  fullText: `ये जो दिल के टुकड़े होते हैं रोज़,  
ये जो साँसों में काँटे चुभते हैं,  
मैं सब सह लूँ... पर तुझे भूल जाने का,  
वो ख़ालीपन, वो सूनापन,  
उससे तो ये ज़ख़्म जन्नत लगते हैं।  
तेरा नाम आता है तो रूह काँप जाती है,  
यादों के ग़म से जिस्म थक जाता है,  
पर जिस रात तू सपनों में नहीं आती,  
वो रात...  
मौत से भी लम्बी जाती है।  
क्यों निभाऊँ मैं ये अधूरा सफ़र तेरा?  
क्यों बनूँ मैं तेरे पैरों की धूल?  
क्योंकि तेरे बिना जो शाम ढलेगी,  
वो सूरज डूबने से पहले ही,  
अँधेरा बन के टूट जाएगी।  
हो सकता है ये प्यार ज़हर हो तेरा,  
हो सकता है मैं बस एक स्याही का धब्बा,  
पर तू है तो दर्द भी रौशनी लगता है,  
और तेरे जाने के बाद की सुबह...  
बस एक सन्नाटा लगता है। `, 
  theme: {
    gradient: "from-purple-900 via-blue-800 to-indigo-900", // tailwind gradient
    accentColor: "#8b5cf6", // hex color for accents
    textColor: "#e0e7ff", // hex color for text
    bgPattern: "radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.15) 0%, transparent 50%)", // optional background pattern
    patternPosition: "center" 
  }
},
  {
    id: "Main Khud Ek Sitara Hoon",
    title: "Main Khud Ek Sitara Hoon",
    category: "hindi",
    preview: `Jo milne waala nahi, uska intezaar kya karun?
Har mod pe bas khamoshiyaan ho, toh izhaar kya karun?
Chaand to taaron se ghira hua hai sada se,`,
    fullText: `Jo milne waala nahi, uska intezaar kya karun?
Har mod pe bas khamoshiyaan ho, toh izhaar kya karun?
Chaand to taaron se ghira hua hai sada se,
to aise chaand se main wafaadari kya krun?

 hnn beshaq koi aur bhii likhega uske baare mein,
par kisi aur ki likhayi se main kyu darun?
main to wo hoon jo har lafz me khud ko jala chuka,
to kisi aur ke alfazon se main kyu darun?

 jab chaand ko pasand hai taaarein,
to main chaand ke piche kyu marun?
jisne meri Roshni me kbhi dekha hi nahi,
uske liye khud ko kyun main kam krun?

ab chaand bhi bhid me kho raha hai,
na pehchaan bachi na Roshni ka nasha,
aise chaand ka main kya krun?
jiska noor bhi ab dikhne lga jhutha sa,

to ab khud ka aasman sajata hoon,
na chaand chahiye na taare, main khud ek sitara hoon.

jo tha, so tha... ab likhni hai kahani apni,
main dard se guzra hoon... par ab main har zakhm ka shayar hoon.`,
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
"Jab Main Nahi Rahunga..." 
Kya tab bhi aaogi tum mujhse milne?
Usi chehre ko choone, jise dekhkar
Tumne kaha tha -
"Ab yeh nazara bhi beimaan lagta hai..."`,
    fullText: `"Jab Main Nahi Rahunga..."

Kya tab bhi aaogi tum mujhse milne?
Usi chehre ko choone, jise dekhkar
Tumne kaha tha -
"Ab yeh nazara bhi beimaan lagta hai..."

 Kya toote hue sheeshe ki tarah
Mere bikhre hue aksh ko jodogi?
Woh saansein jo tumhare naam pe rukti thi,
Kya unki khamoshi se baat karogi?

 Tumne kaha tha - "Tumhara pyaar kam hai",
Par aaj mere kafan ke neeche
Kya tumhe woh dastakhat dikhenge -
Jahaan maine tumhare liye
Apni zindagi ki aakhri siyahi khatam kar di thi?

 Kya ginogi meri haddiyon pe
Un ghaavon ke nishaan -
Jo tumhare har "Mujhe jaane do" ne chhode the?
Kya padh paogi mere safed honton pe
Woh adhura waakya -
"Maaf karna, tumhe rok liya..."

 Aur jab tum jalaogi meri yaadon ko,
To dhuen mein udti ek chitthi nazar aayegi —
Shayad woh meri aakhri koshish hogi
Tum tak pahunchne ki...
Par hawa use bhi tumse door le jaayegi.`,
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
