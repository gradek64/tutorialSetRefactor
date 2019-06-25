import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

// custom;
import ToggleState from '../logic/ToggleState';
import ClickAwayListener from '../ClickAwayListener';
import SearchBox from '../functional/SearchBox';
import './search-auto-suggestions.scss';
/*
  *@ToggleState is class componet that holds only logic and uses
  *@props.render method to exposed its renderMethod and toglle state
  *@SimpleButton is extending ToggleState (using its logic) and then whole thing (ToggleState and Simple button)
  *@is wrapped in ToggleSimpleButton functional component that is expoerted outside and takes props for SingleButton
*/
class SearchAutoSuggestion extends React.Component {
  /* eslint-disable no-lone-blocks */

  state = {
    suggestions: null,
  }

  scrollThroughResults = (inp, arr) => {
  /* the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values: */
    let currentFocus;
    /* execute a function when someone writes in the text field: */
    inp.addEventListener('input', function (e) {
      let a; let b; let i; const
        val = e.target.value;
      console.log(e.target.value);

      /* close any already open lists of autocompleted values */
      closeAllLists();
      if (!val) { return false; }
      currentFocus = -1;
      /* create a DIV element that will contain the items (values): */
      a = document.createElement('div');
      a.setAttribute('id', `${this.id}autocomplete-list`);
      a.setAttribute('class', 'autocomplete-items');
      /* append the DIV element as a child of the autocomplete container: */
      this.parentNode.appendChild(a);

      console.log('this.parentNode', this.parentNode);
      /* for each item in the array... */
      for (i = 0; i < arr.length; i++) {
        /* check if the item starts with the same letters as the text field value: */
        if (arr[i].substr(0, val.length).toUpperCase() === val.toUpperCase()) {
          /* create a DIV element for each matching element: */
          b = document.createElement('DIV');
          /* make the matching letters bold: */
          b.innerHTML = `<strong>${arr[i].substr(0, val.length)}</strong>`;
          b.innerHTML += arr[i].substr(val.length);
          /* insert a input field that will hold the current array item's value: */
          b.innerHTML += `<input type='hidden' value='${arr[i]}'>`;
          /* execute a function when someone clicks on the item value (DIV element): */
          b.addEventListener('click', function (e) {
            /* insert the value for the autocomplete text field: */
            inp.value = this.getElementsByTagName('input')[0].value;
            /* close the list of autocompleted values,
              (or any other open lists of autocompleted values: */
            closeAllLists();
          });
          a.appendChild(b);
        }
      }
    });
    /* execute a function presses a key on the keyboard: */
    inp.addEventListener('keydown', function (e) {
      let x = document.getElementById(`${this.id}autocomplete-list`);
      if (x) x = x.getElementsByTagName('div');
      if (e.keyCode === 40) {
        /* If the arrow DOWN key is pressed,
        increase the currentFocus variable: */
        currentFocus++;
        /* and and make the current item more visible: */
        addActive(x);
      } else if (e.keyCode == 38) { // up
        /* If the arrow UP key is pressed,
        decrease the currentFocus variable: */
        currentFocus--;
        /* and and make the current item more visible: */
        addActive(x);
      } else if (e.keyCode == 13) {
        /* If the ENTER key is pressed, prevent the form from being submitted, */
        e.preventDefault();
        if (currentFocus > -1) {
          /* and simulate a click on the "active" item: */
          if (x) x[currentFocus].click();
        }
      }
    });
    function addActive(x) {
      /* a function to classify an item as "active": */
      if (!x) return false;
      /* start by removing the "active" class on all items: */
      removeActive(x);
      if (currentFocus >= x.length) currentFocus = 0;
      if (currentFocus < 0) currentFocus = (x.length - 1);
      console.log('currentFocus', currentFocus);
      /* add class "autocomplete-active": */
      const fucus = isNaN(currentFocus) ? 0 : currentFocus;
      x[fucus].classList.add('autocomplete-active');
    }
    function removeActive(x) {
    /* a function to remove the "active" class from all autocomplete items: */
      for (let i = 0; i < x.length; i++) {
        x[i].classList.remove('autocomplete-active');
      }
    }
    function closeAllLists(elmnt) {
    /* close all autocomplete lists in the document,
    except the one passed as an argument: */
      const x = document.getElementsByClassName('autocomplete-items');
      for (let i = 0; i < x.length; i++) {
        if (elmnt != x[i] && elmnt != inp) {
          x[i].parentNode.removeChild(x[i]);
        }
      }
    }
    /* execute a function when someone clicks in the document: */
    document.addEventListener('click', (e) => {
      closeAllLists(e.target);
    });
  }

  onInputHandler = (e) => {
    const triggerSearchPhrase = e.target.value;
    /* axios
      .get('http://autosug.ebaystatic.com/autosug',
        {
          headers: { 'Access-Control-Allow-Origin': '*' },
          params:
        {
          kwd: triggerSearchPhrase,
          _jgr: 1,
          sId: 3,
          _ch: 0,
          callback: 'showResults',
        },
        })
      .then((res) => {
        const { data } = res;
        const [, result] = data.match(/showResults\((.*)\)/);
        const callBackRes = JSON.parse(result);
        const suggestions = callBackRes.res ? callBackRes.res.sug : null;
        console.log(suggestions);
        this.setState({ suggestions });
      }); */
    const countries = ['Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Anguilla', 'Antigua &amp; Barbuda', 'Argentina', 'Armenia', 'Aruba', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bermuda', 'Bhutan', 'Bolivia', 'Bosnia &amp; Herzegovina', 'Botswana', 'Brazil', 'British Virgin Islands', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cambodia', 'Cameroon', 'Canada', 'Cape Verde', 'Cayman Islands', 'Central Arfrican Republic', 'Chad', 'Chile', 'China', 'Colombia', 'Congo', 'Cook Islands', 'Costa Rica', 'Cote D Ivoire', 'Croatia', 'Cuba', 'Curacao', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Ethiopia', 'Falkland Islands', 'Faroe Islands', 'Fiji', 'Finland', 'France', 'French Polynesia', 'French West Indies', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Gibraltar', 'Greece', 'Greenland', 'Grenada', 'Guam', 'Guatemala', 'Guernsey', 'Guinea', 'Guinea Bissau', 'Guyana', 'Haiti', 'Honduras', 'Hong Kong', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Isle of Man', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jersey', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati', 'Kosovo', 'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macau', 'Macedonia', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Mauritania', 'Mauritius', 'Mexico', 'Micronesia', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Montserrat', 'Morocco', 'Mozambique', 'Myanmar', 'Namibia', 'Nauro', 'Nepal', 'Netherlands', 'Netherlands Antilles', 'New Caledonia', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'North Korea', 'Norway', 'Oman', 'Pakistan', 'Palau', 'Palestine', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Puerto Rico', 'Qatar', 'Reunion', 'Romania', 'Russia', 'Rwanda', 'Saint Pierre &amp; Miquelon', 'Samoa', 'San Marino', 'Sao Tome and Principe', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa', 'South Korea', 'South Sudan', 'Spain', 'Sri Lanka', 'St Kitts &amp; Nevis', 'St Lucia', 'St Vincent', 'Sudan', 'Suriname', 'Swaziland', 'Sweden', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', 'Timor L\'Este', 'Togo', 'Tonga', 'Trinidad &amp; Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Turks &amp; Caicos', 'Tuvalu', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States of America', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Vatican City', 'Venezuela', 'Vietnam', 'Virgin Islands (US)', 'Yemen', 'Zambia', 'Zimbabwe'];

    const suggestions = ['bike', 'bike lock', 'bike lights', 'bike pump', 'mountain bike', 'bike trailer', 'bike rack', 'bike cover', 'electric bike', 'bike bell'];
    // this.setState({ suggestions, toggle: true });
    this.scrollThroughResults(document.getElementById('results'), countries);
  }


  /* toggleMethod is exposed from ToggleState class and allows to as well as toggle state
true or false , that could be used in other componenst as Simple button */

  render() {
    const { eventHandler, searchBoxRef } = this.props;
    const { suggestions } = this.state;
    return (
      <ToggleState
        renderComp={(toggleMethod, toggle) => (
          <React.Fragment>
            {suggestions ? <ClickAwayListener clickAway={() => { this.setState({ suggestions: null }); }} /> : null}
            <div
              className="search-auto-suggetions autocomplete"
              style={{ position: 'relative', display: 'flex' }}
            >
              <SearchBox id="results" eventHandler={eventHandler} onInputHandler={this.onInputHandler} ref={searchBoxRef} />
              {/* {suggestions ? ( */}

              <datalist
                role="presentation"
                // required by airbnb but div in this case can not be in focus
                onKeyPress={() => {}}
                className="list"
                style={{
                  position: 'absolute',
                  left: '0',
                  top: '1rem',
                }}
              >
                {suggestions ? suggestions.map((e, i) => <option key={`suggestions${i}`} value={e} />) : null}
              </datalist>
              {/* ) : null} */}
            </div>
          </React.Fragment>
        )}
      />
    );
  }
}

/* SearchAutoSuggestion.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
}; */

export default SearchAutoSuggestion;
