import React from 'react';

function ProductSlug({params: { slugs }}) {
    return (
        <div>
            <h1>...SLug: {slugs}</h1>
        </div>
    );
}

export default ProductSlug;