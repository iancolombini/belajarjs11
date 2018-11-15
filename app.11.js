var manusia = 
{
    kepala: 1,
    mata: 2,
    telinga: 2,
    tangan: 2,
    kaki: 2,
};

var namaProp;
for (namaProp in manusia) 
{
    console.log(namaProp + ":" + manusia[namaProp]);
}