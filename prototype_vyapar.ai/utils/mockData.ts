// FIX: Add full content for utils/mockData.ts
import { GeneratedContentData, ContentType } from "../types";

export const MOCK_GENERATED_CONTENT: GeneratedContentData = {
  // FIX: Added contentType to match the GeneratedContentData interface.
  contentType: ContentType.POST,
  // FIX: The `captions` data structure has been corrected to match the `GeneratedCaption[]` type.
  // The original structure was grouped by platform but the type definition expects a flat array
  // where each object represents a single caption with a `platform` and a singular `caption` property.
  captions: [
    {
      platform: "Instagram",
      caption:
        "Sip in style! ☕✨ Our handmade ceramic mugs are here to make your coffee breaks a little more special. Each one is unique, just like you. #HandmadeWithLove #CeramicArt #CoffeeLovers",
    },
    {
      platform: "Instagram",
      caption:
        "Art you can hold. ❤️ Discover the beauty of imperfection with our artisan-crafted ceramic mugs. Perfect for your morning ritual. Link in bio to shop! #ArtisanMade #PotteryLove #MorningCoffee",
    },
    {
      platform: "Instagram",
      caption:
        "Elevate your cozy corner. 🏡 There's nothing like a warm drink in a beautiful mug. Get yours now! #CozyVibes #ShopSmall #CeramicMug",
    },
    {
      platform: "Twitter",
      caption:
        "Tired of boring mugs? Upgrade your coffee game with our unique handmade ceramic mugs. ☕ #Handmade #ShopSmall",
    },
    {
      platform: "Twitter",
      caption:
        "Your new favorite mug has arrived. Discover unique, artisan-made ceramics today. #Pottery #Coffee",
    },
    {
      platform: "Twitter",
      caption:
        "The perfect gift for the coffee lover in your life (or for yourself 😉). Shop our new ceramic mug collection! #GiftIdeas #Ceramics",
    },
    {
      platform: "LinkedIn",
      caption:
        "Beyond the Bean: How Quality Craftsmanship Enhances the Daily Ritual. Our new line of handmade ceramic mugs isn't just about holding coffee; it's about appreciating the art and effort that goes into everyday objects. A perfect addition to any discerning professional's desk. #Craftsmanship #CorporateGifting #Artisan",
    },
    {
      platform: "LinkedIn",
      caption:
        "We believe in the power of small details. That's why we've poured our passion into creating our latest collection of handmade ceramic mugs, designed to bring a touch of artistry to your workday. Explore the collection. #Business #Quality #Handmade",
    },
  ],
  posterIdeas: [
    "A close-up shot of a pair of hands gently holding one of the mugs, with steam rising from it. The text reads: 'Crafted by Hand. Enjoyed by You.'",
    "A flat-lay image with a mug, a coffee bag, a book, and some aesthetic elements like dried flowers. The headline: 'Your Perfect Morning Companion.'",
    "A minimalist design with a simple, elegant photo of the mug on a solid, earthy-toned background. Text: 'Simplicity is the ultimate sophistication. - Leonardo da Vinci. Discover Artisan Mugs.'",
  ],
  // FIX: Removed the `videoIdeas` property as it does not exist on the `GeneratedContentData` type.
};
