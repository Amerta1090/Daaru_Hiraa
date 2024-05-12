<?php

namespace App\Http\Controllers;

use App\Http\Resources\NotificationResource;
use App\Models\denda;
use App\Http\Requests\StoredendaRequest;
use App\Http\Requests\UpdatedendaRequest;
use App\Models\Notification;

class DendaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $notification = Notification::query();
        $userId = auth()->user()->id;

        
        $notifications = $notification->where('user_id', $userId)->get();
        
        return inertia('Member/Denda/Index', [
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
    public function store(StoredendaRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(denda $denda)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(denda $denda)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatedendaRequest $request, denda $denda)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(denda $denda)
    {
        //
    }
}
