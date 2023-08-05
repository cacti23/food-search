import React, { useState } from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import ResultsList from '../components/ResultsList';
import useResults from '../hooks/useResults';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsPyPrice = (price) => {
    return results.filter((result) => {
      return result.price === price;
    });
  };

  return (
    // to make sure a particular view takes the space of only the visible part of screen add flex: 1
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <ResultsList
          results={filterResultsPyPrice('$')}
          title='Cost Effective'
        />
        <ResultsList results={filterResultsPyPrice('$$')} title='Bit Pricier' />
        <ResultsList
          results={filterResultsPyPrice('$$$')}
          title='Big Spender'
        />
      </ScrollView>
    </>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
