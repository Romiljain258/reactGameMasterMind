import React from "react";
import Card from 'react-bootstrap/Card';
import {Button} from "react-bootstrap";
class Mindgame extends React.Component{
      constructor(){
          super();
          this.state={
            count:9,
            chosenColor:"", 
            choseColor1:"",
            choseColor2:"",
            choseColor3:"",
            sButtonColor:"",
            sButtonColor1:"",
            sButtonColor2:"",
            sButtonColor3:"",         
          };
      }
      incrementValue=(val)=>{
        this.setState({
          // chosenColor:this.state.chosenColor+val,
          chosenColor:val,  
        });
    };
    incrementValue1=(val)=>{
      this.setState({
        // chosenColor:this.state.chosenColor+val,
        chosenColor1:val,  
      });
  };
  incrementValue2=(val)=>{
    this.setState({
      // chosenColor:this.state.chosenColor+val,
      chosenColor2:val,  
    });
};
incrementValue3=(val)=>{
  this.setState({
    // chosenColor:this.state.chosenColor+val,
    chosenColor3:val,  
  });
};
  
CountInc=()=>{
  this.setState({
    count:this.state.count-1,
  })
  console.log(this.state.count);
}
sButtonchosenColor=(col)=>{
  this.setState({
    sButtonColor:col,
  })
}
sButtonchosenColor1=(col)=>{
  this.setState({
    sButtonColor1:col,
  })
}
sButtonchosenColor2=(col)=>{
  this.setState({
    sButtonColor2:col,
  })
}
sButtonchosenColor3=(col)=>{
  this.setState({
    sButtonColor3:col,
  })
}
compareColor=()=>{
  // var a=[Array.from(['white','yellow','green','purple','blue','red'], () =>  Math.floor(Math.random() * 6))];
  let myShows=['white','red','green','yellow','pink','purple'];
  let a=[];
  for(let k=0;k<4;k++){
  let ele= myShows[Math.floor(Math.random() * 6)];
  a.push(ele);
  }
  for(let i=0;i<a.length;i++){
  console.log(a[i]+" ");
  }
  for(let j=0;j<4;j++){

    if (JSON.stringify(a[j]) === JSON.stringify(this.state.chosenColor) && j==0) 
        this.sButtonchosenColor('red');
    else if(JSON.stringify(a[j]) === JSON.stringify(this.state.chosenColor))
        this.sButtonchosenColor('white');

    if (JSON.stringify(a[j]) === JSON.stringify(this.state.chosenColor1) && j==1) 
        this.sButtonchosenColor1('red');
    else if(JSON.stringify(a[j]) === JSON.stringify(this.state.chosenColor1))
        this.sButtonchosenColor1('white');

    if (JSON.stringify(a[j]) === JSON.stringify(this.state.chosenColor2) && j==2) 
        this.sButtonchosenColor2('red');
    else if(JSON.stringify(a[j]) === JSON.stringify(this.state.chosenColor2))
        this.sButtonchosenColor2('white');

    if (JSON.stringify(a[j]) === JSON.stringify(this.state.chosenColor3) && j==3) 
        this.sButtonchosenColor3('red');
    else if(JSON.stringify(a[j]) === JSON.stringify(this.state.chosenColor3))
         this.sButtonchosenColor3('white');
  }
    this.CountInc();
}



count=()=>{
  var arr=[];
  for(var i=0;i<10;i++){
    // background:this.state.chosenColor
    arr.push(<Card.Text>  
         {this.state.count==i?<>  
        <span style={{marginLeft:'-3rem',marginRight:'0rem',background:this.state.chosenColor}} class="btn btn-circle btn-sm">01</span>
        <span style={{marginLeft:'1rem',marginRight:'0rem',background:this.state.chosenColor1}}class="btn btn-circle btn-sm">01</span>
        <span style={{marginLeft:'1rem',marginRight:'0rem',background:this.state.chosenColor2}}class="btn btn-circle btn-sm">01</span>
        <span style={{marginLeft:'1rem',marginRight:'0rem',background:this.state.chosenColor3}}class="btn btn-circle btn-sm">01</span>
        <span style={{marginLeft:'1.5rem',background:this.state.sButtonColor}}class="btn btn-c btn-s"></span>
        <span style={{marginLeft:'1rem',background:this.state.sButtonColor1}}class="btn btn-c btn-s"></span>
        <span style={{marginLeft:'1rem',background:this.state.sButtonColor2}}class="btn btn-c btn-s"></span>
        <span style={{marginLeft:'1rem',background:this.state.sButtonColor3}}class="btn btn-c btn-s"></span>
        </>
        :
        <>
        <span style={{marginLeft:'-3rem',marginRight:'0rem'}} class="btn btn-circle btn-sm">01</span>
        <span style={{marginLeft:'1rem',marginRight:'0rem'}}class="btn btn-circle btn-sm">01</span>
        <span style={{marginLeft:'1rem',marginRight:'0rem'}}class="btn btn-circle btn-sm">01</span>
        <span style={{marginLeft:'1rem',marginRight:'0rem'}}class="btn btn-circle btn-sm">01</span>
        <span style={{marginLeft:'1.5rem'}}class="btn btn-c btn-s"></span>
        <span style={{marginLeft:'1rem'}}class="btn btn-c btn-s"></span>
        <span style={{marginLeft:'1rem'}}class="btn btn-c btn-s"></span>
        <span style={{marginLeft:'1rem'}}class="btn btn-c btn-s"></span>
        </>}
        </Card.Text>)
        
  }
  
  return arr;
}
      render(){
        
          return(
            
              <>
              <h1>MASTERMIND GAME</h1>
              <div class="block">
              <div id="box" >

    <Card style={{width: '20rem', height:'34rem',backgroundColor:'orange'}}>
    <Card.Header className="bg">MasterMind Game</Card.Header>
      <Card.Body >
        {/* <Card.Title> Card Title </Card.Title> */}
        
        <Card.Text>    
        <span style={{marginLeft:'-9.8rem',marginRight:'0rem',background:'brown'}} class="btn btn-circle btn-sm"></span>
        <span style={{marginLeft:'1rem',marginRight:'0rem',background:'brown'}}class="btn btn-circle btn-sm"></span>
        <span style={{marginLeft:'1rem',marginRight:'0rem',background:'brown'}}class="btn btn-circle btn-sm"></span>
        <span style={{marginLeft:'1rem',marginRight:'0rem',background:'brown'}}class="btn btn-circle btn-sm"></span>
      </Card.Text>
      {this.count()}
      

      </Card.Body>
    </Card>
    </div>
    <Card.Text>  
        <span onClick={()=>{this.incrementValue('white')}} style={{marginLeft:'7rem',marginRight:'0.6rem',background:'white'}}class="btn btn-circle btn-sm btn-side">5</span>
        <span onClick={()=>{ this.incrementValue('yellow')}} style={{marginLeft:'-0rem',marginRight:'0.2rem',background:'yellow'}}class="btn btn-circle btn-sm btn-side">5</span>
        <span onClick={()=>{ this.incrementValue('green')}} style={{marginLeft:'0.3rem',marginRight:'0.2rem',background:'green'}}class="btn btn-circle btn-sm btn-side">5</span>
        <span onClick={()=>{ this.incrementValue('purple') }} style={{marginLeft:'0.3rem',marginRight:'0.8rem',background:'purple'}}class="btn btn-circle btn-sm btn-side">5</span>
        <span onClick={()=>{ this.incrementValue('red')}} style={{marginLeft:'-0.3rem',marginRight:'0.8rem',background:'red'}}class="btn btn-circle btn-sm btn-side">5</span>
        <span onClick={()=>{ this.incrementValue('blue') }} style={{marginLeft:'-0.3rem',marginRight:'0.5rem',background:'blue'}}class="btn btn-circle btn-sm btn-side">5</span>
        </Card.Text>

        <Card.Text>  
        <span onClick={()=>{this.incrementValue1('white')}} style={{marginLeft:'7rem',marginRight:'0.6rem',background:'white'}}class="btn btn-circle btn-sm btn-side">5</span>
        <span onClick={()=>{ this.incrementValue1('yellow')}} style={{marginLeft:'-0rem',marginRight:'0.2rem',background:'yellow'}}class="btn btn-circle btn-sm btn-side">5</span>
        <span onClick={()=>{ this.incrementValue1('green')}} style={{marginLeft:'0.3rem',marginRight:'0.2rem',background:'green'}}class="btn btn-circle btn-sm btn-side">5</span>
        <span onClick={()=>{ this.incrementValue1('purple') }} style={{marginLeft:'0.3rem',marginRight:'0.8rem',background:'purple'}}class="btn btn-circle btn-sm btn-side">5</span>
        <span onClick={()=>{ this.incrementValue1('red')}} style={{marginLeft:'-0.3rem',marginRight:'0.8rem',background:'red'}}class="btn btn-circle btn-sm btn-side">5</span>
        <span onClick={()=>{ this.incrementValue1('blue') }} style={{marginLeft:'-0.3rem',marginRight:'0.5rem',background:'blue'}}class="btn btn-circle btn-sm btn-side">5</span>
        </Card.Text>

        <Card.Text>  
        <span onClick={()=>{this.incrementValue2('white')}} style={{marginLeft:'7rem',marginRight:'0.6rem',background:'white'}}class="btn btn-circle btn-sm btn-side">5</span>
        <span onClick={()=>{ this.incrementValue2('yellow')}} style={{marginLeft:'-0rem',marginRight:'0.2rem',background:'yellow'}}class="btn btn-circle btn-sm btn-side">5</span>
        <span onClick={()=>{ this.incrementValue2('green')}} style={{marginLeft:'0.3rem',marginRight:'0.2rem',background:'green'}}class="btn btn-circle btn-sm btn-side">5</span>
        <span onClick={()=>{ this.incrementValue2('purple') }} style={{marginLeft:'0.3rem',marginRight:'0.8rem',background:'purple'}}class="btn btn-circle btn-sm btn-side">5</span>
        <span onClick={()=>{ this.incrementValue2('red')}} style={{marginLeft:'-0.3rem',marginRight:'0.8rem',background:'red'}}class="btn btn-circle btn-sm btn-side">5</span>
        <span onClick={()=>{ this.incrementValue2('blue') }} style={{marginLeft:'-0.3rem',marginRight:'0.5rem',background:'blue'}}class="btn btn-circle btn-sm btn-side">5</span>
        </Card.Text>

        <Card.Text>  
        <span onClick={()=>{this.incrementValue3('white')}} style={{marginLeft:'7rem',marginRight:'0.6rem',background:'white'}}class="btn btn-circle btn-sm btn-side">5</span>
        <span onClick={()=>{ this.incrementValue3('yellow')}} style={{marginLeft:'-0rem',marginRight:'0.2rem',background:'yellow'}}class="btn btn-circle btn-sm btn-side">5</span>
        <span onClick={()=>{ this.incrementValue3('green')}} style={{marginLeft:'0.3rem',marginRight:'0.2rem',background:'green'}}class="btn btn-circle btn-sm btn-side">5</span>
        <span onClick={()=>{ this.incrementValue3('purple') }} style={{marginLeft:'0.3rem',marginRight:'0.8rem',background:'purple'}}class="btn btn-circle btn-sm btn-side">5</span>
        <span onClick={()=>{ this.incrementValue3('red')}} style={{marginLeft:'-0.3rem',marginRight:'0.8rem',background:'red'}}class="btn btn-circle btn-sm btn-side">5</span>
        <span onClick={()=>{ this.incrementValue3('blue') }} style={{marginLeft:'-0.3rem',marginRight:'0.5rem',background:'blue'}}class="btn btn-circle btn-sm btn-side">5</span>
        </Card.Text>
        <Button  id="button1" onClick={this.compareColor}>check</Button>
       
        </div>
              </>
          )
      }
    }
export default Mindgame;