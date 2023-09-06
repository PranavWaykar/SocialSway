// Sidebar
const menuItems = document.querySelectorAll('.menu-items');

//messages
const messagesNotifications = document.querySelector("#message-notifications");
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const messagesSearch = document.querySelector('#message-search');

// Theme
const theme = document.querySelector('#theme');
const themeModel = document.querySelector('.customize-theme');
const fontSize = document.querySelectorAll('.choose-size span');
const changeBg = document.querySelectorAll('.choose-bg span');
const bg1 = document.querySelector('.bg-1');
const bg2 = document.querySelector('.bg-2');
const bg3 = document.querySelector('.bg-3');

let root = document.querySelector(':root');
const colorPalette = document.querySelectorAll('.choose-color span')


//remove active classList
const changeActiveItem = () => {
    menuItems.forEach(item => item.classList.remove('active'))
}

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveItem()
        item.classList.add('active');
        if(item.id !== 'notifications') {
            document.querySelector('.notifications-popup').
            style.display = 'none'
        }else {
            document.querySelector('.notifications-popup').
            style.display = 'block'
            document.querySelector('#notifications .notification-count').
            style.display = 'none'
        }
    })
});

// Messages

const searchMessage = () => {
    let val =  messagesSearch.value.toLowerCase()
    message.forEach(user => {
        let name = user.querySelector('h5').textContent.toLowerCase();
        if(name.indexOf(val) != -1){
            user.style.display = 'flex'
        }else {
            user.style.display = 'none'
        }
    })
}
messagesSearch.addEventListener('keyup', searchMessage)


// hilights the messges
messagesNotifications.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 3rem var(--color-primary)'
    messagesNotifications.querySelector('.notification-count').style.display = 'none'
    setTimeout(() => {
        messages.style.boxShadow = 'none'
    }, 2000)
});


// customize-theme

//open model
const openThemeModel = () => {
    themeModel.style.display = 'grid'
}

const closeModel = (e) => {
    if(e.target.classList.contains('customize-theme')){
        themeModel.style.display = 'none'
    }
}

//close model
themeModel.addEventListener('click', closeModel)

theme.addEventListener('click', openThemeModel)

//remove active class from span or font selectors
const removeSizeSelector = () => {
    fontSize.forEach(size => {
        size.classList.remove('active')
    })
}

// font
fontSize.forEach(size => {

    size.addEventListener('click', () => {
        removeSizeSelector();
        let fontSizes;
        size.classList.toggle('active')
        if(size.classList.contains['font-size-1']){
            fontSizes = "10px"
            root.style.setProperty('--sticky-top-left', '5.4rem');
            root.style.setProperty('--sticky-top-right', '5.4rem');
        }else if(size.classList.contains['font-size-2']){
            fontSizes = "13px"
            root.style.setProperty('--sticky-top-left', '5.4rem');
            root.style.setProperty('--sticky-top-right', '-7rem');
        }else if(size.classList.contains['font-size-3']){
            fontSizes = "16px"
            root.style.setProperty('--sticky-top-left', '-2rem');
            root.style.setProperty('--sticky-top-right', '-17rem');
        }else if(size.classList.contains['font-size-4']){
            fontSizes = "19px"
            root.style.setProperty('--sticky-top-left', '-5rem');
            root.style.setProperty('--sticky-top-right', '-25rem');
        }else if(size.classList.contains['font-size-5']){
            fontSizes = "22px"
            root.style.setProperty('--sticky-top-left', '-12rem');
            root.style.setProperty('--sticky-top-right', '-35rem');
        }

        // change font size of the root html elements
    document.querySelector('html').style.fontSize = fontSizes
    })

})
//remove active
const removeActivePlatte = () => {
    colorPalette.classList.remove('active')
}

// change family
colorPalette.forEach(color => {
    color.addEventListener('click', () => {
        let primaryHue;
        removeActivePlatte();

        if(color.classList.contains['color-1']){
            primaryHue = 252
        }else if(color.classList.contains['color-2']){
            primaryHue = 52
        }else if(color.classList.contains['color-3']){
            primaryHue = 352
        }else if(color.classList.contains['color-4']){
            primaryHue = 152
        }else if(color.classList.contains['color-5']){
            primaryHue = 102
        }
        color.classList.add('active')

        root.style.setProperty('--color-primaryHue', primaryHue)
    })
});


// setBackground
let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

const changeBG = () => {
    root.style.setProperty('--light-color-lightness', lightColorLightness)
    root.style.setProperty('--white-color-lightness', whiteColorLightness)
    root.style.setProperty('--dark-color-lightness', darkColorLightness)
}

bg1.addEventListener('click', () => {


    // add active class
    bg1.classList.add('active');

    //remove active class
    bg2.classList.remove('active');
    bg3.classList.remove('active');
    window.location.reload();
})

bg2.addEventListener('click', () => {
    darkColorLightness = '95%'
    whiteColorLightness = '20%'
    lightColorLightness = '15%'

    // add active class
    bg2.classList.add('active');

    //remove active class
    bg1.classList.remove('active');
    bg3.classList.remove('active');
    changeBG();
})

bg3.addEventListener('click', () => {
    darkColorLightness = '95%'
    whiteColorLightness = '10%'
    lightColorLightness = '0%'

    // add active class
    bg3.classList.add('active');

    //remove active class
    bg1.classList.remove('active');
    bg2.classList.remove('active');
    changeBG();
})