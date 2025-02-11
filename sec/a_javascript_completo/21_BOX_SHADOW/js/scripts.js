class BoxShadowGenerator{
    constructor(
        horizontal, 
        horizontalRef, 
        vertical,
        verticalRef,
        blur,
        blurRef,
        spread,
        spreadRef,
        previewBox,
        rule,
        webkitRule,
        mozRule,
        color,
        colorRef,
        opacity,
        opacityRef,
        inset,
        boxColor,
        boxColorRef

    ){
        this.horizontal = horizontal;
        this.horizontalRef = horizontalRef;
        this.vertical = vertical;
        this.verticalRef = verticalRef;
        this.blur = blur;
        this.blurRef = blurRef;
        this.spread = spread;
        this.spreadRef = spreadRef;
        this.previewBox = previewBox;
        this.rule = rule;
        this.webkitRule = webkitRule;
        this.mozRule = mozRule;
        this.color = color;
        this.colorRef = colorRef;
        this.opacity = opacity;
        this.opacityRef = opacityRef;
        this.inset = inset;
        this.boxColor = boxColor;
        this.boxColorRef = boxColorRef;

    }

    initialize(){

        this.horizontalRef.value = this.horizontal.value;
        this.verticalRef.value = this.vertical.value;
        this.blurRef.value = this.blur.value;
        this.spreadRef.value = this.spread.value;
        this.colorRef.value = this.color.value;
        this.opacityRef.value = this.opacity.value;
        this.boxColorRef.value = this.boxColor.value;
    }

    applyRule(){
        const rgbaColor = this.hexToRgba(this.color.value, this.opacity.value);
        this.previewBox.style.boxShadow = `${this.horizontal.value}px ${this.vertical.value}px ${this.blur.value}px ${this.spread.value}px ${rgbaColor} ${this.inset.checked ? 'inset' : ''}`;

        this.currentRule = this.previewBox.style.boxShadow;
    }

    hexToRgba(hex, opacity) {
        let r = 0, g = 0, b = 0;
        if (hex.length === 4) {
            r = parseInt(hex[1] + hex[1], 16);//exemplo:hex[1] = 0, hex[1] + hex[1] = 00
            g = parseInt(hex[2] + hex[2], 16);
            b = parseInt(hex[3] + hex[3], 16);
        } else if (hex.length === 7) {
            r = parseInt(hex[1] + hex[2], 16);
            g = parseInt(hex[3] + hex[4], 16);
            b = parseInt(hex[5] + hex[6], 16);
        }
        return `rgba(${r}, ${g}, ${b}, ${opacity})`;
    }

    showRule(){
        this.rule.innerText = this.currentRule;
        this.webkitRule.innerText = `${this.currentRule}`;
        this.mozRule.innerText = `${this.currentRule}`;
    }

    updateValue(type, value){
        switch (type) {
            case 'horizontal':
                this.horizontalRef.value = value;
                this.horizontal.value = value;
                break;
            
            case 'vertical':
                this.verticalRef.value = value;
                this.vertical.value = value;
                break;

            case 'blur':
                this.blurRef.value = value;
                this.blur.value = value;
                break;

            case 'spread':
                this.spreadRef.value = value;
                this.spread.value = value;
                break;

            case 'color':
                this.colorRef.value = value;
                this.color.value = value;
                break;

            case 'opacity':
                this.opacityRef.value = value;
                this.opacity.value = value;
                break;

                
            default:
                break;
        }
        this.applyRule();
        this.showRule();
    }
        
}

//const seleção de elementos

const horizontal = document.querySelector("#horizontal");//tipo range
const horizontalRef = document.querySelector("#horizontal-value");
const vertical = document.querySelector("#vertical");//tipo range
const verticalRef = document.querySelector("#vertical-value");
const blur = document.querySelector("#blur");//tipo range
const blurRef = document.querySelector("#blur-value");
const spread = document.querySelector("#spread");//tipo range
const spreadRef = document.querySelector("#spread-value");

const color = document.querySelector("#color");
const colorRef = document.querySelector("#color-value");

const opacity = document.querySelector("#opacity");
const opacityRef = document.querySelector("#opacity-value");

const inset = document.querySelector("#inset");


const previewBox = document.querySelector("#box");

const rule = document.querySelector("#rule span");
const webkitRule = document.querySelector("#webkit-rule span");
const mozRule = document.querySelector("#moz-rule span");

const copyButton = document.querySelector("#rules-area");

const copyParagraph = document.querySelector("#copy-rules");

const boxColor = document.querySelector("#box-color");
const boxColorRef = document.querySelector("#box-color-value");


const boxShadow = new BoxShadowGenerator(
    horizontal,
    horizontalRef,
    vertical,
    verticalRef,
    blur,
    blurRef,
    spread,
    spreadRef,
    previewBox,
    rule,
    webkitRule,
    mozRule,
    color,
    colorRef,
    opacity,
    opacityRef,
    inset,
    boxColor,
    boxColorRef
)

boxShadow.initialize();
boxShadow.applyRule();
boxShadow.showRule();

//eventos   

horizontal.addEventListener("input", ()=>{
    boxShadow.updateValue('horizontal', horizontal.value);
})

horizontalRef.addEventListener("input", ()=>{
    boxShadow.updateValue('horizontal', horizontalRef.value);
})

vertical.addEventListener("input", ()=>{
    boxShadow.updateValue('vertical', vertical.value);
})

verticalRef.addEventListener("input", ()=>{
    boxShadow.updateValue('vertical', verticalRef.value);
})

blur.addEventListener("input", ()=>{
    boxShadow.updateValue('blur', blur.value);
})

blurRef.addEventListener("input", ()=>{
    boxShadow.updateValue('blur', blurRef.value);
})

spread.addEventListener("input", ()=>{
    boxShadow.updateValue('spread', spread.value);
})

spreadRef.addEventListener("input", ()=>{
    boxShadow.updateValue('spread', spreadRef.value);
})

color.addEventListener("input", ()=>{
    boxShadow.updateValue('color', color.value);
})

colorRef.addEventListener("input", ()=>{
    boxShadow.updateValue('color', colorRef.value);
})

opacity.addEventListener("input", ()=>{
    boxShadow.updateValue('opacity', opacity.value);
})

opacityRef.addEventListener("input", ()=>{
    boxShadow.updateValue('opacity', opacityRef.value);
})

inset.addEventListener("input", ()=>{
    boxShadow.applyRule();
    boxShadow.showRule();
})


copyButton.addEventListener("click", (e) => {
    const rules = copyButton.innerText.replace(/^\s*\n/gm, "");
    // console.log(rules);

    navigator.clipboard.writeText(rules).then(() => {
        copyParagraph.innerText="Regra copiada com sucesso!"
        copyParagraph.style.color = "#4CAF50";

        setTimeout(()=>{
            copyParagraph.innerText="Clique no quadro acima para copiar as regras";
            copyParagraph.style.color = "#333";
        }, 1000)
    })
   //       / - indica o início da expressão regular
   //       ^\s*\n - ^ indica o início da linha, \s* indica que pode haver espaços em branco, \n indica que pode haver uma quebra de linha
    //      g indica que a pesquisa deve ser global, m indica que a pesquisa deve ser multilinha
    
});

boxColor.addEventListener("input", ()=>{
    boxShadow.previewBox.style.backgroundColor = boxColor.value;
    boxShadow.boxColor.value = boxColor.value;
    boxShadow.boxColorRef.value = boxColor.value;
})

boxColorRef.addEventListener("input", ()=>{
    boxShadow.previewBox.style.backgroundColor = boxColorRef.value;
    boxShadow.boxColor.value = boxColorRef.value;
    boxShadow.boxColorRef.value = boxColorRef.value;
})