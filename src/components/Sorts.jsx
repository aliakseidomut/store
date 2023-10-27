import classes from "../styles/Sorts.module.css"

function Sorts({sort, onSetSort}) {
    const handleChange = (e) => {
        onSetSort(e.target.id);
    }
    
    return (
        <div className={classes.sorts}>
            <input type='radio' name='sorts' id='cheap' onChange={handleChange}/>
            <label className={sort !== 'cheap' ? classes.button : classes.buttonActive} htmlFor="cheap">Сначала дешевые</label>

            <input type='radio' name='sorts' id='expensive' onChange={handleChange}/>
            <label className={sort !== 'expensive' ? classes.button : classes.buttonActive} htmlFor="expensive">Сначала дорогие</label>

            <input type='radio' name='sorts' id='popular' onChange={handleChange}/>
            <label className={sort !== 'popular' ? classes.button : classes.buttonActive} htmlFor="popular">Сначала популярные</label>
        </div>
    );
}
  
export default Sorts;