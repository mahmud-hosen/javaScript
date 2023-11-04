@extends('admin.layouts.master')

@section('content')

<div class="content-wrapper">

    <!-- Main content -->
    <section class="content">
        <div class="container-fluid">
            <div class="row justify-content-center">
                

                <div class="col-10 mt-3">
                    <div class="card">
                        <div class="card-header">
                            <h3 class="card-title">Banner List</h3>
                        </div>
                        <!-- /.card-header -->
                        <div class="card-body table-responsive p-0">
                            <table class="table table-hover text-nowrap text-cente">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Price</th>
                                        <th>Discounted Price</th>
                                        <th>Type</th>
                                        <th>Validity</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    @foreach ($all_subscription_plan as $subscription_plan)
                                    <tr>
                                        <td>{{ $loop->index + 1 }}</td>
                                        <td>{{ $subscription_plan->name }}</th>
                                        <td>{{ $subscription_plan->price }}</th>
                                        <td>{{ $subscription_plan->discounted_price }}</th>
                                        <td>{{ $subscription_plan->type }}</th>
                                        <td>{{ $subscription_plan->validity }}</th>
                                            @if ($subscription_plan->status == 1)
                                        <td>Active</td>
                                        @endif
                                        @if ($subscription_plan->status == 0)
                                        <td>Inactive</td>
                                        @endif

                                        <td>
                                            <div class="btn-group" role="group" aria-label="Button group">
                                                <a href="{{ route('admin.subscription_plan.edit', $subscription_plan->id) }}" class="btn btn-warning">Edit</a>
                                                <form action="{{ route('admin.subscription_plan.delete', $subscription_plan->id) }}" method="POST">
                                                    @csrf
                                                    @method('DELETE')
                                                    <button type="button" class="btn btn-danger" id="deleteItem">Delete</button>
                                                </form>                                            </div>
                                        </td>

                                    </tr>
                                    @endforeach

                                </tbody>
                            </table>
                        </div>
                        <!-- /.card-body -->
                    </div>
                    <!-- /.card -->
                </div>
            </div>

        </div>
    </section>
    <!-- /.content -->

</div>

@endsection

<!-- Toast Delete Message -->
@section('page-scripts')
<script>
    document.addEventListener('DOMContentLoaded', function() {
        const deleteButton = document.getElementById('deleteItem');
        deleteButton.addEventListener('click', function() {
            Swal.fire({
                title: 'Delete Item?'
                , text: 'Are you sure you want to delete this item?'
                , icon: 'warning'
                , showCancelButton: true
                , confirmButtonText: 'Yes, delete it!'
                , cancelButtonText: 'No, cancel'
            , }).then((result) => {
                if (result.isConfirmed) {
                    // If the user confirms, submit the form
                    this.closest('form').submit();
                }
            });
        });
    });

</script>
@endsection

<!-- Toast Message -->
@if(session('message'))
@section('page-scripts')
<script>
    Toast.fire({
        icon: 'success'
        , title: "{{ session('message') }}"
    })

</script>
@endsection
@endif
