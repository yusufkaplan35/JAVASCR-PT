// sort fonksiyonunun temel kullanimindaki siralama mantigi ASCII kod tablosundaki siralamaya gore calisir
// https://www.ascii-code.com/
// arr.sort()
// arr = [12, 1, 2, 22, 4, 35, 145 ];
// arr = [ 1, 12, 145, 2, 22, 35, 4]
// Gelismis kullanimda -> arr.sort( (a,b)=>{} )
// Eger icteki fonksiyon negatif donerse a, b den once siralanir
// Eger icteki fonksiyon pozitif donerse b, a dan once siralanir
// Eger icteki fonksiyon sifir donerse siralama degismez
const stringSortASC = (arr) => { 
    return arr.sort( (a,b) => a.localeCompare(b, "tr") )
}
const stringSortDESC = (arr) => { 
    return arr.sort( (a,b) => b.localeCompare(a, "tr") )
}
const numericSortASC = (arr) => { 
    return arr.sort( (a,b) => a-b )
}
const numericSortDESC = (arr) => { 
    return arr.sort( (a,b) => b-a )
}
const randomSort = (arr) => { 
    return arr.sort( (a,b) => Math.random() - 0.5 )
}
export { stringSortASC, stringSortDESC, numericSortASC, numericSortDESC, randomSort }