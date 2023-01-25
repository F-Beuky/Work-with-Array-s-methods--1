var userData=[
    {id:0, name:'sara', age:21},
    {id:1, name:'mina', age:20},
    {id:2, name:'tara', age:29},
    {id:3, name:'saba', age:23},
]
var userOption=+prompt('یکی از گزینه های زیر را انتخاب کنید:\n\n1- متد foreach\n2- متد some\n 3- متد every\n 4- متد find\n 5- متدهای push و pop\n 6- متدهای shift و unshift\n 7- متدهای findindex و splice',1)
switch(userOption){
    case 1:
        // متد فورایچ، مقداری را برنمیگرداند و به ازای تمام مقادیر آرایه، تکرار میشود
        //روش اول استفاده از متد forEach
        console.log('روش اول استفاده از متد forEach ')
        userData.forEach(function(user){
            console.log(user)
        })


        // روش دوم استفاده از متد forEach
        console.log('\n\n\nروش دوم استفاده از متد forEach ')
        userData.forEach(user=>console.log(user))
        break

    case 2:
        // در متد سام به محض این که شرط حلقه سام، برقرار می شود، حلقه شکسته شده و تمام می شود
        // متد سام، یک مقدار بولین را برمیگرداند
        //روش اول استفاده از متد some
        console.log('روش اول استفاده از متد some ')
        var isInUser=userData.some(function(user){
            console.log(user)
            return user.name==='tara'
        })
        console.log(isInUser)


        // روش دوم استفاده از متد some
        console.log('\n\n\nروش دوم استفاده از متد some ')
        var isInUser=userData.some(user=>user.name=='tara')
        console.log(isInUser)
        break

    case 3:
        // در متد اوری تا زمانی که شرط حلقه اوری، برقرار باشد، حلقه ادامه پیدا می کند
        // درغیر این صورت، حلقه اوری، شکسته شده و تمام می شود
        // متد اوری، یک مقدار بولین را برمیگرداند
        //روش اول استفاده از متد every
        console.log('روش اول استفاده از متد every ')
        var isUser=userData.every(function(user){
            console.log(user)
            return user.age>20
        })   
        console.log(isUser)  
        
        // روش دوم استفاده از متد every
        console.log('\n\n\nروش دوم استفاده از متد every ')
        var isInUser=userData.every(user=>user.age>20)
        console.log(isInUser)
        break        

    case 4:
        // در متد فایند به محض این که شرط حلقه فایند، برقرار می شود، حلقه شکسته شده و تمام می شود
        // متد فایند، اطلاعات آن عنصری از آرایه، که به خاطر آن عنصر، شرط حلقه فایند برقرار شده است، را برمیگرداند
        //روش اول استفاده از متد find
        console.log('روش اول استفاده از متد find ')
        var mainUserData=userData.find(function(user){
            console.log(user)
            return user.name==='tara'
        })
        console.log('\n\n=>', mainUserData)


        // روش دوم استفاده از متد find
        console.log('\n\n\nروش دوم استفاده از متد find ')
        var mainUserData=userData.find(user=>user.name=='tara')
        console.log('=>',mainUserData)
        break  
        
    case 5:
        // متد پوش، عنصری را به انتهای آرایه اضافه میکند
        // و متد پاپ، عنصری را از انتهای آرایه حذف میکند
        console.log('استفاده از متد push')
        console.log('\nاکنون اطلاعات کاربر جدیدی از ورودی دریافت می شود و به انتهای آرایه اضافه میشود')
        var newUser= {id:0, name:'', age:0}
        newUser.id=+prompt("ID کاربر جدید را وارد کنید:")
        newUser.name=prompt("نام کاربر جدید را وارد کنید:")
        newUser.age=+prompt("سن کاربر جدید را وارد کنید:")
        userData.push(newUser)
        userData.forEach(function(user){
            console.log(user)
        })

        console.log('\n\nو حالا همان کاربر جدید از آرایه فوق حذف میشود')
        userData.pop()
        userData.forEach(function(user){
            console.log(user)
        })        
        break     
        
    case 6:
        // متد آنشیفت، عنصری را به ابتدای آرایه اضافه میکند
        // و متد شیفت، عنصری را از ابتدای آرایه حذف میکند
        console.log('استفاده از متد unshift')
        console.log('\nاکنون اطلاعات کاربر جدیدی از ورودی دریافت می شود و به ابتدای آرایه اضافه میشود')
        var newUser= {id:0, name:'', age:0}
        newUser.id=+prompt("ID کاربر جدید را وارد کنید:")
        newUser.name=prompt("نام کاربر جدید را وارد کنید:")
        newUser.age=+prompt("سن کاربر جدید را وارد کنید:")
        userData.unshift(newUser)
        userData.forEach(function(user){
            console.log(user)
        })

        console.log('\n\nو حالا همان کاربر جدید از آرایه فوق حذف میشود')
        userData.shift()
        userData.forEach(function(user){
            console.log(user)
        })        
        break       
        
    case 7:
        // متد فایندایندکس، مقداری را در آرایه جستجو و در صورت وجود، ایندکس آن مقدار را برمیگرداند
        // و در صورت عدم وجود، عدد -1 را برمیگرداند
        // و متد اسپلایس، از ایندکس مورد نظر به تعداد مورد نظر از عناصر آرایه را حذف میکند
        // و می تواند به جای عناصر حذف شده، عناصر جدید را جایگزین کند
        
        console.log('اطلاعات کاربران موجود در پایگاه داده ها:')
        userData.forEach(function(user){
            console.log(user)
        })

        console.log('استفاده از متد findIndex')

        var userId=+prompt("لطفا آيدي كاربري كه ميخواهيد عمليات حذف كاربران، از آن كاربر آغاز شود را وارد نماييد:")
        var userIndex=userData.findIndex(user=>user.id===userId)
        if(userIndex===-1){
            console.log("چنين كاربري در پايگاه داده وجود ندارد")
        } else {
            var userCount=+prompt("تعداد كاربراني كه ميخواهيد حذف شوند را وارد كنيد")

            console.log('استفاده از متد splice')
            var userAns=confirm("آيا مي خواهيد كاربر يا كاربران جديدي جايگزين شوند؟")
            var newUserList=[]
            var newUser= {id:0, name:'', age:0}
            if(userAns==true) {
                while(userAns) {
                    newUser.id=+prompt("ID کاربر جدید را وارد کنید:")
                    newUser.name=prompt("نام کاربر جدید را وارد کنید:")
                    newUser.age=+prompt("سن کاربر جدید را وارد کنید:")
                    newUserList.push(newUser)

                    userAns=confirm("آيا مي خواهيد اطلاعات كاربر ديگري را وارد كنيد؟")
                }
                userData.splice(userIndex,userCount)
                var insertionIndex=userIndex
                newUserList.forEach(function(user){
                    userData.splice(insertionIndex++,0,user)
                })
            } else {
                userData.splice(userIndex,userCount)
            }
        }
        userData.forEach(function(user){
            console.log(user)
        })        
        break           
}


