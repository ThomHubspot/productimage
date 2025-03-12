import React, { useState } from 'react';
import {
  Button,
  Divider,
  Link,
  Flex,
  hubspot,
  Text,
} from '@hubspot/ui-extensions';
import { PropertyTile } from './components/PropertyTile';
import { PropertyForm } from './components/PropertyForm';
import { listingItemsSamples, ListingItem } from './enums/flexAndBoxExample';

const FlexAndBoxExample = () => {
  const [listingItems, setListingItems] = useState(listingItemsSamples);

  const restoreDefaultListing = () => {
    setListingItems(listingItemsSamples);
  };

  const addNewListingItem = (listingItem: ListingItem) => {
    setListingItems([...listingItems, listingItem]);
  };

  return (
    // Set the arrangement of all elements on the page in the form of a column.
    <Flex direction="column" gap="xl">
      
      <Flex direction="column" gap="md" align="start">
        {/* Set behavior for all tiles to wrap when filled in a row. */}
        <Flex gap="sm" wrap="wrap">
          {listingItems.map((listing, index) => (
            <PropertyTile key={index} listingItem={listing} />
          ))}
        </Flex>
        <Divider distance="xl" />
      </Flex>
    </Flex>
  );
};

hubspot.extend(() => <FlexAndBoxExample />);
