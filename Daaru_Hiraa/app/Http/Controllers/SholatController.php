<?php

namespace App\Http\Controllers;

use App\Http\Resources\NotificationResource;
use App\Models\Notification;
use App\Models\sholat;
use App\Http\Requests\StoresholatRequest;
use App\Http\Requests\UpdatesholatRequest;

class SholatController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $notification = Notification::query();
        $userId = auth()->user()->id;

        
        $notifications = $notification->where('user_id', $userId)->get();
        
        return inertia('Member/JadwalSholat/Index', [
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
    public function store(StoresholatRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(sholat $sholat)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(sholat $sholat)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatesholatRequest $request, sholat $sholat)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(sholat $sholat)
    {
        //
    }
}
