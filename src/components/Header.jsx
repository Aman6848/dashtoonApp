import '../App.css';
import '../index.css';

export default function Header(){
    return (
        <div className='header'>
            <div className='top'></div>
            <div className='text'>
                <h1 style={{fontFamily:"sans-serif"}}> AI Comic Creator </h1>
            </div>
        </div>
    );
}