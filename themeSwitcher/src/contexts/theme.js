import { createContext, useContext } from "react";

//iss code me humne ek hi file me teeno kaam kiye hai 
//jo hum seperately kr rhe the last wale project me
// 1) Phle humne ThemeContext ke naam se context ko create kiya
// 2) Then fir isi file me humne ThemeProvider naam ka ek variable declare kiya aur usko ThemeContext.Provider ki value assign krdi
// Ye 2) step wala kaam hum last wale project me ek alag file bna kar kr rhe the
// 3) Fir humne useContext wale hook ki bi functionality apna ek custom hook bna kr grab kr li taaki jab kisi dusri file me use krna ho toh hume useContext() ko call na krna pde aur hum seedhe apna custom hook call krle
// miniContext wale project me humne UserContextProvider wali file values paas ki thi aur hum App.jsx me unhe call nhi krna pda tha
// but yaha hum ThemeProvider ko initialize kr rhe hai Provider ki value aur hum directly App.jsx me ThemeProvider ko use krte time values ko call kr lenge
// yaha ThemeContext me jo 3 parameters humne paas kiye hai un sabko define humne App.jsx file me kiya hai
// Context API ka main kam yhi hota hai ki hum jo bi context paas kr rhe hai wo props ka use kiye bina hum globally kahi bi access kr ske

export const ThemeContext = createContext({
    themeMode: "Light",
    darkTheme: () => {},
    lightTheme: () => {}
})

export const ThemeProvider = ThemeContext.Provider

export default function useTheme() {
    return useContext(ThemeContext)
}