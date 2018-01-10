import React from 'react';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';

import RenderDropdownList from './RenderDropdownList';

const languages = [ { language: 'JavaScript', value: '+language:javascript' },
    { language: 'HTML', value: '+language:html' },
    { language: 'Ruby', value: '+language:ruby' } ];

const sort = [ { sort: 'Highest Stars', value: '&sort=stars&order=desc' },
    { sort: 'Highest Forks', value: '&sort=stars&order=desc' } ];

let SearchForm = props => {
    const { onSubmit, pristine, reset, submitting } = props;
    return (
        <form onSubmit={onSubmit}>
            <div>
                <label>Languages:</label>
                <Field
                    name="languages"
                    component={RenderDropdownList}
                    data={languages}
                    valueField="value"
                    textField="language"/>
                <label>Sort By:</label>
                <Field
                    name="sort"
                    component={RenderDropdownList}
                    data={sort}
                    valueField="value"
                    textField="sort"/>
            </div>
            <div>
                <button onClick={props.onSubmit} className="button" type="submit" disabled={pristine || submitting}>Submit</button>
                <button className="button" type="button" disabled={pristine || submitting} onClick={reset}>Reset Values
                </button>
            </div>
        </form>
    );
};

SearchForm = reduxForm({
    form: 'search'  // a unique identifier for this form
})(SearchForm);

const selector = formValueSelector('search'); // <-- same as form name
SearchForm = connect(
    state => {
        return {
            languages: selector(state, 'languages'),
            sort: selector(state, 'sort'),
            archive: selector(state, 'archive'),
            fork: selector(state, 'fork'),
        };
    }
)(SearchForm);

export default SearchForm;
