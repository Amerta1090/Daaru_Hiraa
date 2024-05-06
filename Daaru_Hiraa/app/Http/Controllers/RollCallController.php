<?php

namespace App\Http\Controllers;

use App\Models\RollCall;
use App\Http\Requests\StoreRollCallRequest;
use App\Http\Requests\UpdateRollCallRequest;

class RollCallController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $query = RollCall::query();

        $projects = $query->paginate(10)->onEachSide(1);
    
            return inertia("Project/Index", [
                "projects" => ProjectResource::collection($projects),
                "queryParams" => request()->query()?:null, 
                "success" => session('success'),
                'deleteSuccess' => session('deleteSuccess')
            ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreRollCallRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(RollCall $rollCall)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(RollCall $rollCall)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateRollCallRequest $request, RollCall $rollCall)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(RollCall $rollCall)
    {
        //
    }
}
