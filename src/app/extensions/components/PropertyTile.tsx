import React from 'react';
import {
  Tile,
  Box,
  Flex,
  Text,
  Tag,
  Image,
  Button,
  Link,
} from '@hubspot/ui-extensions';
import {
  ListingItemStatus,
  PropertyTileProps,
  listingItemStatusSelectOptions,
  propertyTypeSelectOptions,
} from '../enums/flexAndBoxExample';

export const PropertyTile = ({ listingItem }: PropertyTileProps) => {
  const truncateWithEllipsis = (text: string, maxLength: number) => {
    return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
  };
  const findLabelByValue = (
    options: { label: string; value: string }[],
    value: string,
  ) => {
    const option = options.find((o) => o.value === value)!;
    return option.label;
  };
  const maxAddressLength = 18;

  return (
    <Tile>
      {/* Set gap between all elements and arrange them in a row inside the Tile. */}
      <Flex gap="m">
        <Image
          src="https://amg-fechoz.com/content/uploads/2022/01/Monte-decors_600x300.png"
          width={300}
          height={180}
        />
        
      </Flex>
    </Tile>
  );
};
