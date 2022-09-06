import React from 'react'

const WishList = () => {
  return (
    <div class="d-flex p-2  justify-content-center">
    <div class="list-group align-self-center d-grid gap-3" >
      <a href="#" class="list-group-item list-group-item-action" aria-current="true">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">Assesins creed</h5>
          <small>3 days ago</small>
          <button type="button" class="btn-close" aria-label="Close"></button>
        </div>
        <p class="mb-1">Some placeholder content in a paragraph.</p>
        <small>And some small print.</small>
      </a>
      <a href="#" class="list-group-item list-group-item-action">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">Crash</h5>
          <small class="text-muted">5 days ago</small>
          <button type="button" class="btn-close" aria-label="Close"></button>
        </div>
        <p class="mb-1">Some placeholder content in a paragraph.</p>
        <small class="text-muted">And some muted small print.</small>
      </a>
      <a href="#" class="list-group-item list-group-item-action">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">Forza horizon</h5>
          <small class="text-muted">1 month ago</small>
          <button type="button" class="btn-close" aria-label="Close"></button>
        </div>
        <p class="mb-1">Some placeholder content in a paragraph.</p>
        <small class="text-muted">And some muted small print.</small>
      </a>
    </div>
  </div>
  )
}

export default WishList