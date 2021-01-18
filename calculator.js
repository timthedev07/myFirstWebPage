function multiply2F(fN1, fN2){
    const mResult = fN1 * fN2
    return mResult;
}
function multiply3F(fN1, fN2, fN3){
    const mResult = fN1 * fN2 * fN3
    return mResult;
}
function multiply4F(fN1, fN2, fN3, fN4){
    const mResult = fN1 * fN2 * fN3 *fN4
    return mResult;
}


document.addEventListener('DOMContentLoaded', function () {
    
    document.querySelector('#sphereVform').onsubmit = () => {
        
        const radius = parseFloat(document.querySelector('#sphereVradius').value);
        console.log('Form submitted')
        
            const radiusCubed = radius**3
            const result = radiusCubed * 3.1415926535898 / 3 * 4
            document.querySelector('#sphereVresult').innerHTML = result;
            
        return false;
    }

    document.querySelector('#coneVform').onsubmit = () => {
        
        const radius = parseFloat(document.querySelector('#coneVradius').value);
        const height = parseFloat(document.querySelector('#coneVheight').value);
        console.log('Form submitted')
        
            const radiusSquared = radius**2
            const result = radiusSquared * 3.1415926535898 / 3 * height
            console.log (result)
            document.querySelector('#coneVresult').innerHTML = result;
            
        return false;
    }
    document.querySelector('#factorNumber').onchange = () => {
        var fn = document.querySelector('#factorNumber').value
        console.log(fn)
        if (fn == "2 factors"){
            document.querySelector('#multiplicationF1').style.display = 'block';
            document.querySelector('#multiplicationF2').style.display = 'block';
            document.querySelector('#multiplicationF3').style.display = 'none';
            document.querySelector('#multiplicationF4').style.display = 'none';

        } else if (fn == "3 factors") {
            console.log('haha');
            document.querySelector('#multiplicationF4').style.display = 'none';
            document.querySelector('#multiplicationF3').style.display = 'block';
            document.querySelector('#multiplicationF1').style.display = 'block';
            document.querySelector('#multiplicationF2').style.display = 'block';

        } else if (fn == "4 factors") {
            document.querySelector('#multiplicationF1').style.display = 'block';
            document.querySelector('#multiplicationF2').style.display = 'block';
            document.querySelector('#multiplicationF3').style.display = 'block';
            document.querySelector('#multiplicationF4').style.display = 'block';

        }
    }
    document.querySelector('#multiplicationform').onsubmit = () => {
        const fV1 = parseFloat(document.querySelector('#multiplicationF1').value);
        const fV2 = parseFloat(document.querySelector('#multiplicationF2').value);


        if (document.querySelector('#multiplicationF3').style.display === 'none'
        && document.querySelector('#multiplicationF4').style.display === 'none'){
            console.log('enter one')
            const res = multiply2F(fV1, fV2)
            document.querySelector('#multiplicationresult').innerHTML = res;

        }


        if (document.querySelector('#multiplicationF3').style.display === 'block'
        && document.querySelector('#multiplicationF4').style.display === 'none'){
            console.log('enter two')
            
            const fV3 = parseFloat(document.querySelector('#multiplicationF3').value);
            const res = multiply3F(fV1, fV2, fV3)
            document.querySelector('#multiplicationresult').innerHTML = res;
            
        }
        if (document.querySelector('#multiplicationF4').style.display === 'block'){
            console.log('enter three')
            
            const fV3 = parseFloat(document.querySelector('#multiplicationF3').value);
            const fV4 = parseFloat(document.querySelector('#multiplicationF4').value);
            const res = multiply4F(fV1, fV2, fV3, fV4)
            document.querySelector('#multiplicationresult').innerHTML = res;

        }
        
        

        //console.log see form status
        console.log('Form submitted')
        //console.log see form status
        
            
            
            
        return false;
    }
    
});
