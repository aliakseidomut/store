import classes from "../styles/Filters.module.css"

function Filters({filters, onSetFilters}) {
    const handleChange = (e) => {
        const newFilters = e.target.checked ? [...filters, {type: e.target.name, value: e.target.value}] : [...filters].filter(el => el.value !== e.target.value);
        onSetFilters(newFilters);
    }

    return (
        <div className={classes.filters}>
            <div className={classes.colorFilters}>
                <h2>По цвету</h2>
                <ul>
                    <li>
                        <label>
                            <input className={classes.checkbox} type='checkbox' name='color' value='синий' onChange={handleChange} />
                            <span>Синий</span>
                        </label>
                    </li>
                    <li>
                        <label>
                            <input className={classes.checkbox} type='checkbox' name='color' value='черный' onChange={handleChange} />
                            <span>Черный</span>
                        </label>
                    </li>
                    <li>
                        <label>
                            <input className={classes.checkbox} type='checkbox' name='color' value='розовый' onChange={handleChange} />
                            <span>Розовый</span>
                        </label>
                    </li>
                    <li>
                        <label>
                            <input className={classes.checkbox} type='checkbox' name='color' value='белый' onChange={handleChange} />
                            <span>Белый</span>
                        </label>
                    </li>
                </ul>
            </div>
            
            <div className={classes.categoryFilters}>
                <h2>По категории</h2>
                <ul>
                    <li>
                        <label>
                            <input className={classes.checkbox} type='checkbox' name='category' value='Футболки' onChange={handleChange} />
                            <span>Футболки</span>
                        </label>
                    </li>
                    <li>
                        <label>
                            <input className={classes.checkbox} type='checkbox' name='category' value='Платья' onChange={handleChange} />
                            <span>Платья</span>
                        </label>
                    </li>
                    <li>
                        <label>
                            <input className={classes.checkbox} type='checkbox' name='category' value='Юбки' onChange={handleChange} />
                            <span>Юбки</span>
                        </label>
                    </li>
                    <li>
                        <label>
                            <input className={classes.checkbox} type='checkbox' name='category' value='Куртки' onChange={handleChange} />
                            <span>Куртки</span>
                        </label>
                    </li>
                    <li>
                        <label>
                            <input className={classes.checkbox} type='checkbox' name='category' value='Джинсы' onChange={handleChange} />
                            <span>Джинсы</span>
                        </label>
                    </li>
                </ul>
            </div>
        </div>
    );
}
  
export default Filters;