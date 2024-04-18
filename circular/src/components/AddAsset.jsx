import React from "react";
import "./Asset.css";

function AddAsset() {
  return (
    <div>
      <h1>Add Asset</h1>
      <form>
        {/*Lets create a form that collects the following details
            asset_name
            category_id
            description
            available
            t_and_c
            insurance_status
            insurance_id
            condit
            rating
            price_method
            penalty_id
            share_type
            price*/}

        <div class="form-group">
          <label for="asset_name">Asset Name</label>
          <input
            type="text"
            name="asset_name"
            id="asset_name"
            placeholder="Asset Name"
          />
          <label for="category_id">Asset Type</label>
          <input
            type="text"
            name="category_id"
            id="category_id"
            placeholder="Category ID"
          />
          <label for="description">Description</label>
          <input
            type="text"
            name="description"
            id="description"
            placeholder="Description"
          />
          <label for="available">Available</label>
          <input
            type="text"
            name="available"
            id="available"
            placeholder="Available"
          />
          <label for="t_and_c">T&C</label>
          <input type="text" name="t_and_c" id="t_and_c" placeholder="T&C" />
          <label for="insurance_status">Insurance Status</label>
          <input
            type="text"
            name="insurance_status"
            id="insurance_status"
            placeholder="Insurance Status"
          />
          <label for="insurance_id">Insurance ID</label>
          <input
            type="text"
            name="insurance_id"
            id="insurance_id"
            placeholder="Insurance ID"
          />
          <label for="condit">Condit</label>
          <input type="text" name="condit" id="condit" placeholder="Condit" />
          <label for="rating">Rating</label>
          <input type="text" name="rating" id="rating" placeholder="Rating" />
          <label for="price_method">Price Method</label>
          <input
            type="text"
            name="price_method"
            id="price_method"
            placeholder="Price Method"
          />
          <label for="penalty_id">Penalty ID</label>
          <input
            type="text"
            name="penalty_id"
            id="penalty_id"
            placeholder="Penalty ID"
          />
          <label for="share_type">Share Type</label>
          <input
            type="text"
            name="share_type"
            id="share_type"
            placeholder="Share Type"
          />
          <label for="price">Price</label>
          <input type="text" name="price" id="price" placeholder="Price" />
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
}

export default AddAsset;
