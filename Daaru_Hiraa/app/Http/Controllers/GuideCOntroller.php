<?php

namespace App\Http\Controllers;

use App\Http\Resources\NotificationResource;
use App\Models\guide;
use App\Http\Requests\StoreguideRequest;
use App\Http\Requests\UpdateguideRequest;
use App\Models\Notification;

class GuideCOntroller extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        
        $notification = Notification::query();
        $userId = auth()->user()->id;

        
        $notifications = $notification->where('user_id', $userId)->get();
        
        return inertia('Guide/Index', [
            "notifications" => NotificationResource::collection($notifications),
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
    public function store(StoreguideRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(guide $guide)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(guide $guide)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateguideRequest $request, guide $guide)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(guide $guide)
    {
        //
    }
}
