-- Remove authentication-related tables for security
DROP TABLE IF EXISTS favorites CASCADE;
DROP TABLE IF EXISTS profiles CASCADE;

-- Add the new poems
INSERT INTO public.poems (title, preview, full_text, category, featured, theme) VALUES
('Mat Poochho Mere Se Uski Baat', 'Mat poochho mere se uski baat, Mere dil ko hai sirf uski aadat.', 'Mat poochho mere se uski baat,
Mere dil ko hai sirf uski aadat.

Uske naam pe thartharaata hai ye dil,
Ek aisi aag hai, bujhti nahi kabhi bhi shaam-o-dhil.

Na maang mere se woh pahla pyaar,
Woh ehsaas hai ab khoon mein rawaan.

Uske bina bhi jeene ki aadat to hai,
Par jeete hai bas usi ke khayaal mein khoye.

Na dikhao use tasveeron mein kahin,
Meri aankhein dhundhti hain use har jagah kahin.

Har chehra uska, har awaaz usi ki,
Yeh deewaangi hai, yeh hai mere dil ki ajeeb si aadat.

Na samjhao mujhko bhulaane ke liye,
Maine to soch liya hai yaadon mein jalne ko.

Wade to the wo jhoote, par kitne pyaare the,
Unhi jhooton ko sach maan kar chalne ki aadat hai.

Na kaho bichhadne ka koi gham,
Yeh bichhadna hi to mera ab watan hai.

Mohabbat na thi, ek aadat si thi,
Aur aadat hai to toot''ti nahi.

Na jagaao mujhe neend se aise,
Mere khwaabon ka shehar hai wahi.

Wahin to milti hai use meri nazar,
Wahin to nibhti hai wada meri usse mulaqaat ki.

Toh mat poochho mere se uski baat,
Mere dil ko hai sirf uski aadat.

Woh mohabbat na thi, aadat thi,
Aur aadat... aadat hai to toot''ti nahi.', 'hindi', true, '{"background": "linear-gradient(135deg, #2c0c2c 0%, #1a0c1a 100%)", "textColor": "#f0e6f0", "headerBg": "linear-gradient(85deg, rgba(150, 30, 100, 0.6), rgba(80, 15, 80, 0.7))", "border": "rgba(255, 150, 255, 0.3)"}'),

('Teri Chahat', 'Teri chahat ka agar koi sabaab hota, Toh tera chehra bhulaana aasaan hota.', 'Teri chahat ka agar koi sabaab hota,
Toh tera chehra bhulaana aasaan hota.

Tere qareeb aane ki koi wajah hoti,
Toh raahon mein tujhe dhoondhna aasaan hota.

Mile hotey agar tujhko paane ke bahaane koi,
Tere sang chalna phir zara aasaan hota.

Likhta main tujhe aasmaan par taaron se,
Suraj banke tere saath dhalna aasaan hota.

Samjha hota agar tujhko koi aaine se,
Teri zubaan pehchaanni aasaan hota.

Jee bhar ke mohabbat kar pata main tujhse,
Tere baad jeena bhi, aur marna aasaan hota.', 'shayari', true, '{"background": "linear-gradient(145deg, rgba(40, 30, 100, 0.8), rgba(80, 20, 120, 0.7))", "textColor": "#e6e6e6", "headerBg": "linear-gradient(85deg, rgba(70, 20, 120, 0.7), rgba(100, 30, 150, 0.6))", "border": "rgba(255, 150, 255, 0.3)"}'),

('मत पूछो', 'मत पूछो मुझसे उसकी बात, मेरे दिल को है बस उसकी आदत।', 'मत पूछो मुझसे उसकी बात,
मेरे दिल को है बस उसकी आदत।

उसके नाम पे थरथराता है ये दिल,
एक ऐसी आग है, बुझती नहीं कभी भी शाम-ओ-दिल।

ना मांग मुझसे वो पहला प्यार,
वो एहसास है अब खून में रवाँ।

उसके बिना भी जीने की आदत तो है,
पर जीते हैं बस उसी के ख्याल में खोये।

ना दिखाओ उसे तस्वीरों में कहीं,
मेरी आँखें ढूंढती हैं उसे हर जगह कहीं।

हर चेहरा उसका, हर आवाज़ उसी की,
ये दीवानगी है, ये है मेरे दिल की अजीब सी आदत।', 'hindi', false, '{"background": "linear-gradient(145deg, rgba(40, 30, 100, 0.8), rgba(80, 20, 120, 0.7))", "textColor": "#e6e6e6", "headerBg": "linear-gradient(85deg, rgba(70, 20, 120, 0.7), rgba(100, 30, 150, 0.6))", "border": "rgba(255, 150, 255, 0.3)"}');